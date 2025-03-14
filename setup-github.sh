#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Personal Website GitHub Setup Script${NC}"
echo "This script will help you push your personal website to GitHub."
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}Git is not installed. Please install Git first.${NC}"
    exit 1
fi

# Function to replace existing repository code
replace_existing_repo() {
    local username=$1
    local repo_name=$2
    local branch_name=$3
    
    echo -e "${YELLOW}Setting up to replace existing repository code...${NC}"
    
    # Check if we need to clone the repository first
    if [ ! -d ".git" ]; then
        echo -e "${YELLOW}Cloning existing repository temporarily...${NC}"
        git clone "https://github.com/$username/$repo_name.git" temp-repo
        
        if [ $? -ne 0 ]; then
            echo -e "${RED}Failed to clone repository. Please check the repository name and your access.${NC}"
            exit 1
        fi
        
        echo -e "${YELLOW}Copying .git directory from cloned repository...${NC}"
        cp -r temp-repo/.git ./
        
        if [ $? -ne 0 ]; then
            echo -e "${RED}Failed to copy .git directory. Please check permissions.${NC}"
            exit 1
        fi
        
        echo -e "${GREEN}Removing temporary repository...${NC}"
        rm -rf temp-repo
    fi
    
    # Check if remote exists
    if ! git remote | grep -q "origin"; then
        git remote add origin "https://github.com/$username/$repo_name.git"
    fi
    
    # Force push to GitHub
    echo -e "${YELLOW}Force pushing to GitHub...${NC}"
    git push -f origin $branch_name
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}Failed to push to GitHub. Please check your credentials and repository access.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}Code pushed to GitHub.${NC}"
}

# Ask for GitHub username and repository name
read -p "Enter your GitHub username: " github_username
read -p "Enter the repository name (e.g., personal-website): " repo_name
read -p "Is this a new repository? (y/n): " is_new_repo

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}Initializing Git repository...${NC}"
    git init
    echo -e "${GREEN}Git repository initialized.${NC}"
else
    echo -e "${YELLOW}Git repository already initialized.${NC}"
fi

# For existing repositories, handle the replacement process first
if [ "$is_new_repo" != "y" ]; then
    read -p "Enter the branch name (default: main): " branch_name
    branch_name=${branch_name:-"main"}
    
    # Call the function to replace existing repository code
    replace_existing_repo "$github_username" "$repo_name" "$branch_name"
    exit 0
fi

# For new repositories, continue with the normal flow
# Add all files
echo -e "${YELLOW}Adding files to Git...${NC}"
git add .
echo -e "${GREEN}Files added.${NC}"

# Commit changes
echo -e "${YELLOW}Committing changes...${NC}"
read -p "Enter commit message (default: 'Initial commit'): " commit_message
commit_message=${commit_message:-"Initial commit"}
git commit -m "$commit_message"
echo -e "${GREEN}Changes committed.${NC}"

# Set up remote
echo -e "${YELLOW}Setting up remote...${NC}"
git remote add origin "https://github.com/$github_username/$repo_name.git"
echo -e "${GREEN}Remote added.${NC}"

# Push to GitHub
echo -e "${YELLOW}Pushing to GitHub...${NC}"
git push -u origin main || git push -u origin master
echo -e "${GREEN}Code pushed to GitHub.${NC}"

echo ""
echo -e "${GREEN}Setup complete!${NC}"
echo "Next steps:"
echo "1. Go to your repository on GitHub: https://github.com/$github_username/$repo_name"
echo "2. Set up GitHub Actions by going to the Actions tab"
echo "3. Set up repository secrets for AWS deployment (see DEPLOYMENT_GITHUB.md)"
echo ""
echo -e "${YELLOW}Remember to make the script executable with:${NC}"
echo "chmod +x setup-github.sh"
echo -e "${YELLOW}Then run it with:${NC}"
echo "./setup-github.sh" 