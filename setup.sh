#!/bin/bash

# Text colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

echo -e "${BLUE}Welcome to the Gibson Next.js App Setup Script${NC}\n"

# Check for required tools
echo "Checking required tools..."

if ! command_exists git; then
    echo -e "${RED}Error: Git is not installed${NC}"
    echo "Please install Git from https://git-scm.com/"
    exit 1
fi

if ! command_exists node; then
    echo -e "${RED}Error: Node.js is not installed${NC}"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

if ! command_exists npm; then
    echo -e "${RED}Error: npm is not installed${NC}"
    echo "Please install npm (it usually comes with Node.js)"
    exit 1
fi

if ! command_exists npx; then
    echo -e "${RED}Error: npx is not installed${NC}"
    echo "Please install npx using: npm install -g npx"
    exit 1
fi

echo -e "${GREEN}✓ Required tools are installed${NC}\n"

# Project Setup
echo -e "${BLUE}Setting up your project...${NC}"

# Get project name
read -p "Enter your project name (press Enter to use 'gibson-next-app'): " project_name
project_name=${project_name:-gibson-next-app}

# Create project directory and clone template
echo -e "\nCreating project in ./${project_name}"
mkdir -p "$project_name"
cd "$project_name"

echo -e "\nCloning Gibson Next.js template..."
git clone https://github.com/GibsonAI/next-app.git . || {
    echo -e "${RED}Failed to clone repository${NC}"
    exit 1
}

# Remove existing git history and initialize new repository
rm -rf .git
git init
git add .
git commit -m "Initial commit from Gibson Next.js template"

# Environment Variables Setup
echo -e "\n${BLUE}Setting up environment variables...${NC}"

# Create .env file from example if it doesn't exist
if [ ! -f .env ]; then
    cp .env.example .env
    echo "Created .env file from .env.example"
fi

# Function to update env variable
update_env_var() {
    local key=$1
    local current_value=$(grep "^${key}=" .env | cut -d '=' -f2)
    local default_value=$current_value
    
    if [ -z "$current_value" ] || [[ $current_value == *"<"*">"* ]]; then
        default_value=""
    fi
    
    read -p "Enter $key (current: ${default_value:-not set}): " new_value
    
    if [ ! -z "$new_value" ]; then
        # If the key exists, replace it. If not, append it.
        if grep -q "^${key}=" .env; then
            sed -i '' "s|^${key}=.*|${key}=${new_value}|" .env
        else
            echo "${key}=${new_value}" >> .env
        fi
        echo -e "${GREEN}✓ Updated ${key}${NC}"
    fi
}

# Update each environment variable
update_env_var "GIBSON_API_KEY"
update_env_var "GIBSON_API_URL"
update_env_var "GIBSON_API_SPEC"
update_env_var "NEXT_PUBLIC_GIBSON_API_SPEC"

echo -e "\n${BLUE}Installing dependencies...${NC}"
npm install

# Update package.json scripts to use npx
echo -e "\n${BLUE}Updating package.json scripts...${NC}"
sed -i '' 's/"dev": "next dev --turbo"/"dev": "npx next dev --turbo"/' package.json
sed -i '' 's/"build": "next build"/"build": "npx next build"/' package.json
sed -i '' 's/"start": "next start"/"start": "npx next start"/' package.json

echo -e "\n${BLUE}Building the project...${NC}"
npx next build

echo -e "\n${GREEN}Setup completed successfully!${NC}"
echo -e "Your new project is ready in the '${project_name}' directory"
echo -e "To start the development server:"
echo -e "1. Navigate to your project: ${BLUE}cd ${project_name}${NC} (if not already there)"
echo -e "2. Run: ${BLUE}npm run dev${NC}" 