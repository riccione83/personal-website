# Deploying to Cloudflare Pages

This project is a static Vite site and can be deployed on Cloudflare Pages without code changes.

## 1. Create the Cloudflare Pages project

1. Go to **Cloudflare Dashboard -> Workers & Pages -> Create -> Pages -> Connect to Git**.
2. Select repository: `riccione83/personal-website`.
3. Select branch: `master` (or `main`, if you switch).

## 2. Build configuration

Use these exact values:

- **Framework preset:** `Vite`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/`

Optional environment variable:

- `NODE_VERSION=20`

## 3. SPA routing (important)

This repo includes `client/public/_redirects`:

```txt
/* /index.html 200
```

Vite copies it to `dist/_redirects` at build time, so Cloudflare serves client-side routes correctly (`/blog`, `/blog/:slug`, etc.).

## 4. Custom domain

1. Open your Pages project -> **Custom domains** -> **Set up a custom domain**.
2. Add your domain (`riccardorizzo.eu`) and subdomain (`www.riccardorizzo.eu`).
3. If your DNS is still on Route53, either:
   - move authoritative nameservers to Cloudflare (recommended for full Cloudflare features), or
   - keep external DNS and create CNAME records to the Pages target shown by Cloudflare.

## 5. Verify after deploy

Check these URLs:

- `/`
- `/blog`
- `/blog/from-scratch-to-standard-tiny-llm-0-5b`
- `/sitemap.xml`
- `/robots.txt`

## 6. Avoid double deployments

The repo currently has an AWS deploy workflow at `.github/workflows/deploy.yml`.
If you fully migrate to Cloudflare Pages, disable that workflow to avoid deploying to both providers.

## Optional: manual deploy via CLI

If needed:

```bash
npm run build
npx wrangler pages deploy dist --project-name personal-website
```

(Requires Cloudflare login via `npx wrangler login`.)
