# Deploying Your Personal Website to AWS S3

This guide will walk you through deploying your static personal website to Amazon S3.

## Prerequisites

1. An AWS account
2. AWS CLI installed and configured
3. Node.js and npm/yarn installed

## Build Your Website

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

2. Build the website:

   ```bash
   npm run build
   # or
   yarn build
   ```

   This will create a `dist` folder with your static website files.

## Create and Configure S3 Bucket

1. Create an S3 bucket:

   ```bash
   aws s3 mb s3://your-website-bucket-name
   ```

2. Configure the bucket for static website hosting:

   ```bash
   aws s3 website s3://your-website-bucket-name --index-document index.html --error-document index.html
   ```

3. Set bucket policy to allow public access (replace `your-website-bucket-name` with your actual bucket name):
   ```bash
   aws s3api put-bucket-policy --bucket your-website-bucket-name --policy '{
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
   }'
   ```

## Upload Your Website

Upload the contents of the `dist` folder to your S3 bucket:

```bash
aws s3 sync dist/ s3://your-website-bucket-name --acl public-read
```

## Access Your Website

Your website will be available at:

```
http://your-website-bucket-name.s3-website-[region].amazonaws.com
```

Replace `[region]` with your AWS region (e.g., `us-east-1`).

## Setting Up a Custom Domain (Optional)

1. Register a domain through Route 53 or another domain registrar.
2. Create a CloudFront distribution pointing to your S3 bucket.
3. Set up SSL/TLS certificate through AWS Certificate Manager.
4. Configure DNS settings to point to your CloudFront distribution.

## Updating Your Website

When you make changes to your website, rebuild it and sync the updated files:

```bash
npm run build
# or
yarn build

aws s3 sync dist/ s3://your-website-bucket-name --acl public-read
```

## Troubleshooting

- If your website doesn't load, check the bucket policy and ensure public access is allowed.
- For routing issues, make sure your error document is set to `index.html` to support client-side routing.
- If images or assets don't load, check the paths in your code and ensure they're relative.

## Additional Resources

- [AWS S3 Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
- [Route 53 Documentation](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)
