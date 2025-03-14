# GitHub Actions Deployment to AWS S3

This guide explains how to set up GitHub Actions to automatically deploy your website to AWS S3 whenever you push changes to your repository.

## Prerequisites

1. An AWS account
2. An S3 bucket configured for static website hosting
3. A GitHub repository for your website code

## Setting Up AWS

### 1. Create an IAM User for Deployment

1. Go to the AWS IAM console
2. Create a new user with programmatic access
3. Attach the following policy:
   - `AmazonS3FullAccess` (or a more restricted custom policy for just your bucket)
4. Save the Access Key ID and Secret Access Key

### 2. Configure Your S3 Bucket

Make sure your S3 bucket is configured for static website hosting:

```bash
aws s3 website s3://your-website-bucket-name --index-document index.html --error-document index.html
```

Set the bucket policy to allow public access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-website-bucket-name/*"
    }
  ]
}
```

## Setting Up GitHub Secrets

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add the following secrets:
   - `AWS_ACCESS_KEY_ID`: Your IAM user's access key ID
   - `AWS_SECRET_ACCESS_KEY`: Your IAM user's secret access key
   - `AWS_S3_BUCKET`: Your S3 bucket name (e.g., `your-website-bucket-name`)
   - `AWS_REGION`: The AWS region where your bucket is located (e.g., `us-east-1`)

## How the Deployment Works

The GitHub Actions workflow in `.github/workflows/deploy.yml` does the following:

1. Triggers on pushes to the main/master branch or when manually triggered
2. Sets up Node.js and installs dependencies
3. Builds the website
4. Configures AWS credentials
5. Syncs the built files to your S3 bucket

## Manual Deployment

You can manually trigger a deployment by:

1. Going to the "Actions" tab in your GitHub repository
2. Selecting the "Deploy Website to S3" workflow
3. Clicking "Run workflow"

## Troubleshooting

- **Deployment fails with access denied**: Check your IAM user permissions and GitHub secrets
- **Website not updating**: Clear your browser cache or check S3 bucket contents
- **Build errors**: Check the GitHub Actions logs for build errors

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [AWS S3 Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
