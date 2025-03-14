# Personal Website

A modern, responsive personal website/portfolio built with React, Tailwind CSS, and Framer Motion.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Sections for About, Work Experience, Publications, and Contact
- Social media links for easy connection
- Fully static - can be hosted on S3 or any static hosting service

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

This will create a `dist` directory with your built website.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for instructions on deploying to AWS S3.

## Customization

- Update your social media links in `client/src/components/sections/Contact.tsx`
- Modify your work experience in `client/src/components/sections/Experience.tsx`
- Edit your publications in `client/src/components/sections/Portfolio.tsx`
- Change your about information in `client/src/components/sections/About.tsx`

## License

MIT
