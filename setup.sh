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

echo -e "Welcome to GibsonAI's Next.js App Setup Script!\n"

# Check for required tools
echo -e "${BLUE}Checking required tools...${NC}\n"

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
echo -e "${BLUE}Setting up your project...${NC}\n"

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
echo -e "\n${BLUE}Setting up environment variables...${NC}\n"

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    touch .env
    echo -e "${GREEN}✓ Created .env file for your project${NC}\n"
fi

# Add the Gibson API Base URL to the .env file
echo "GIBSON_API_URL=https://api.gibsonai.com/" >> .env

# Get the project API key
echo -e "You can find the API key for your project in your GibsonAI Project under Settings"
read -p "Enter the API key for your project: " api_key
if [ ! -z "$api_key" ]; then
    echo "GIBSON_API_KEY=${api_key}" >> .env
    echo -e "${GREEN}✓ Set GIBSON_API_KEY in .env${NC}\n"
fi

# Get the project OpenAPI spec URL
echo -e "You can find the OpenAPI specification URL in your GibsonAI Project under API Docs"
read -p "Enter the OpenAPI specification URL for your project: " spec_url
if [ ! -z "$spec_url" ]; then
    echo "GIBSON_API_SPEC=${spec_url}" >> .env
    echo -e "${GREEN}✓ Set GIBSON_API_SPEC in .env${NC}\n"
fi

echo -e "${BLUE}Installing dependencies...${NC}"
npm install

echo -e "\n\n${BLUE}Generating the type-safe API client...${NC}"
npm run typegen

echo -e "\n${GREEN}Setup completed successfully!${NC}\n"
echo -e "To start working on your project:"
echo -e "Run: ${BLUE}cd $project_name && npm run dev${NC}"
