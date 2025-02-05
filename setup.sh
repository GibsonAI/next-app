#!/bin/bash

# Text colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Error handling
set -e

echo -e "${BLUE}Welcome to the Gibson Next.js App Setup Script${NC}\n"

# Get project name
read -p "Enter your project name (press Enter to use 'my-gibson-app'): " project_name
project_name=${project_name:-my-gibson-app}

# 1. Clone the template
echo -e "\n${BLUE}1. Cloning the template...${NC}"
git clone https://github.com/GibsonAI/next-app.git "$project_name" || {
    echo -e "${RED}Failed to clone repository${NC}"
    exit 1
}
cd "$project_name" || exit 1

# 2. Remove Git history and initialize new repository
echo -e "\n${BLUE}2. Initializing fresh Git repository...${NC}"
rm -rf .git
git init

# 3. Install dependencies
echo -e "\n${BLUE}3. Installing dependencies...${NC}"
npm install

# 4. Set up environment variables
echo -e "\n${BLUE}4. Setting up environment variables...${NC}"
cp .env.example .env

echo "You can find your API key in your GibsonAI Project under Settings"
read -p "Enter your Gibson API key: " api_key
if [ ! -z "$api_key" ]; then
    sed -i.bak "s/<your-gibson-api-key>/${api_key}/" .env
    rm .env.bak
fi

echo -e "\nYou can find the OpenAPI specification URL in your GibsonAI Project under API Docs"
read -p "Enter the OpenAPI specification URL: " spec_url
if [ ! -z "$spec_url" ]; then
    sed -i.bak "s|https://api\.gibsonai\.com/v1/-/openapi/<hash>|${spec_url}|" .env
    rm .env.bak
fi

# 5. Generate type-safe API client and start dev server
echo -e "\n${BLUE}5. Generating type-safe API client...${NC}"
npm run typegen

echo -e "\n${BLUE}6. Starting development server...${NC}"
npm run dev
