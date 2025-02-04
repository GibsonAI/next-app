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

echo -e "${GREEN}✓ Required tools are installed${NC}\n"

# Project Setup
echo -e "${BLUE}Setting up your project...${NC}"

# Get project name
read -p "Enter your project name (press Enter to use 'gibson-next-app'): " project_name
project_name=${project_name:-gibson-next-app}

echo -e "\nCloning Gibson Next.js template..."
git clone https://github.com/GibsonAI/next-app.git "$project_name" || {
    echo -e "${RED}Failed to clone repository${NC}"
    exit 1
}

cd $project_name

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

# Get API key
read -p "Enter your Gibson API key: " api_key
if [ ! -z "$api_key" ]; then
    case "$(uname)" in
        "Darwin") # macOS
            sed -i '' "s|^GIBSON_API_KEY=.*|GIBSON_API_KEY=${api_key}|" .env
            ;;
        *) # Linux and others
            sed -i "s|^GIBSON_API_KEY=.*|GIBSON_API_KEY=${api_key}|" .env
            ;;
    esac
    echo -e "${GREEN}✓ Updated GIBSON_API_KEY${NC}"
fi

# Get full OpenAPI spec URL and parse it
echo "You can find your OpenAPI specification URL in your GibsonAI Project under API Docs"
read -p "Enter your OpenAPI specification URL: " spec_url
if [ ! -z "$spec_url" ]; then
    # Update GIBSON_API_SPEC with the full URL
    case "$(uname)" in
        "Darwin") # macOS
            sed -i '' "s|^GIBSON_API_SPEC=.*|GIBSON_API_SPEC=${spec_url}|" .env
            ;;
        *) # Linux and others
            sed -i "s|^GIBSON_API_SPEC=.*|GIBSON_API_SPEC=${spec_url}|" .env
            ;;
    esac
    
    # Create the NEXT_PUBLIC version by removing https:// from the URL
    public_url=$(echo "$spec_url" | sed 's|https://||')
    case "$(uname)" in
        "Darwin") # macOS
            sed -i '' "s|^NEXT_PUBLIC_GIBSON_API_SPEC=.*|NEXT_PUBLIC_GIBSON_API_SPEC=${public_url}|" .env
            ;;
        *) # Linux and others
            sed -i "s|^NEXT_PUBLIC_GIBSON_API_SPEC=.*|NEXT_PUBLIC_GIBSON_API_SPEC=${public_url}|" .env
            ;;
    esac
    
    echo -e "${GREEN}✓ Updated API spec variables${NC}"
fi

echo -e "\n${BLUE}Installing dependencies...${NC}"
npm install

echo -e "\n${BLUE}Generating the type-safe API client...${NC}"
npm run typegen

echo -e "\n${GREEN}Setup completed successfully!${NC}"
echo -e "To start the development server:"
echo -e "Run: ${BLUE}npm run dev${NC}"
