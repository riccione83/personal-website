# Setting Up a New GitHub Repository

This guide will help you create a new GitHub repository and push your personal website code to it, replacing any existing code.

## Creating a New Repository on GitHub

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Enter a name for your repository (e.g., "personal-website")
4. Add an optional description
5. Choose whether to make the repository public or private
6. **Do not** initialize the repository with a README, .gitignore, or license
7. Click "Create repository"

## Initializing Your Local Repository

Open your terminal and navigate to your project directory:

```bash
cd /path/to/your/personal-website
```

Initialize a new Git repository:

```bash
git init
```

Add all your files to the repository:

```bash
git add .
```

Commit the files:

```bash
git commit -m "Initial commit"
```

## Connecting to GitHub and Pushing Your Code

Add the GitHub repository as a remote:

```bash
git remote add origin https://github.com/yourusername/personal-website.git
```

Replace `yourusername` with your GitHub username and `personal-website` with your repository name.

Push your code to GitHub:

```bash
git push -u origin main
```

If your default branch is named "master" instead of "main", use:

```bash
git push -u origin master
```

## If You Need to Replace Existing Code in a Repository

If you already have a repository with code that you want to completely replace:

1. Clone the existing repository:

   ```bash
   git clone https://github.com/yourusername/repository-name.git temp-repo
   ```

2. Copy the `.git` directory from the cloned repository to your project:

   ```bash
   cp -r temp-repo/.git ./
   ```

3. Remove the temporary repository to avoid "embedded git repository" warnings:

   ```bash
   rm -rf temp-repo
   ```

4. Navigate to your project directory (if you're not already there):

   ```bash
   cd /path/to/your/personal-website
   ```

5. Add all your files:

   ```bash
   git add .
   ```

6. Commit the changes:

   ```bash
   git commit -m "Complete code replacement"
   ```

7. Force push to GitHub:

   ```bash
   git push -f origin main
   ```

   (or `git push -f origin master` if your default branch is "master")

## Enabling GitHub Actions

After pushing your code:

1. Go to your repository on GitHub
2. Click on the "Actions" tab
3. GitHub will detect the workflow file in `.github/workflows/deploy.yml`
4. Click "I understand my workflows, go ahead and enable them"

## Setting Up Repository Secrets

Follow the instructions in [DEPLOYMENT_GITHUB.md](DEPLOYMENT_GITHUB.md) to set up the required secrets for deployment.

## Verifying the Setup

1. Make a small change to your code
2. Commit and push the change
3. Go to the "Actions" tab in your GitHub repository
4. You should see your workflow running
5. Once completed, verify that your website has been updated on S3
