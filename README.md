# Personal Website - Riccardo Rizzo

A modern, responsive personal website built with React and optimized for performance across all devices and browsers, including iOS Safari.

## Features

- Responsive design optimized for all devices
- Optimized for performance with best PageSpeed scores
- SEO-friendly with structured data
- AWS CloudFront CDN integration
- Automated deployment via GitHub Actions
- Comprehensive browser compatibility (Chrome, Firefox, Safari, Edge)

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** CSS with modern features
- **Deployment:** AWS (S3, CloudFront, Route53)
- **CI/CD:** GitHub Actions
- **Performance:** Optimized assets, proper caching, compression

## Development

### Prerequisites

- Node.js 18+
- Yarn

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   yarn install
   ```
3. Start development server:
   ```
   yarn dev
   ```
4. Build for production:
   ```
   NODE_ENV=production yarn build
   ```

## Deployment

This website is deployed to AWS using GitHub Actions. The deployment architecture includes:

- S3 bucket for static content storage
- CloudFront distributions for CDN delivery
- Route53 for DNS management

### Manual Deployment

To manually deploy the website:

1. Build the project:
   ```
   NODE_ENV=production yarn build
   ```
2. Deploy to S3:
   ```
   ./deploy.sh
   ```

### GitHub Actions Deployment

The repository includes GitHub Actions workflows that automatically deploy the website to AWS when changes are pushed to the main branch.

For details on setting up GitHub Actions deployment, see [DEPLOYMENT_GITHUB.md](./DEPLOYMENT_GITHUB.md).

### AWS Configuration

The website uses two CloudFront distributions:

- `www.riccardorizzo.eu` (primary domain)
- `riccardorizzo.eu` (secondary domain)

Both domains point to the same S3 bucket, configured correctly to handle all traffic.

## Browser Compatibility

The website is fully tested and compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (desktop and mobile, including iOS)
- Edge (latest)

## Performance Optimizations

The following optimizations have been implemented:

- Image compression and optimization
- CSS and JavaScript minification
- HTTP/2 support via CloudFront
- Proper content type headers
- Browser caching with appropriate Cache-Control headers
- Gzip and Brotli compression
- Critical CSS inlining
- Lazy loading of non-critical resources
- Mobile-specific optimizations for iOS Safari

## Scripts

- `yarn dev`: Start development server
- `yarn build`: Build for production
- `yarn preview`: Preview production build
- `./deploy.sh`: Deploy to AWS
- `./setup-github-secrets.sh`: Set up GitHub secrets for deployment

## License

MIT
