import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import viteImagemin from "vite-plugin-imagemin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Check if we're building for production
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    // Enable compression for production with lower threshold to compress more files
    isProduction &&
      viteCompression({
        algorithm: "gzip",
        ext: ".gz",
        filter: /\.(js|mjs|json|css|html|svg|txt|xml)$/i,
        threshold: 1024, // Compress files larger than 1kb
        deleteOriginFile: false,
        verbose: true,
      }),
    isProduction &&
      viteCompression({
        algorithm: "brotliCompress",
        ext: ".br",
        filter: /\.(js|mjs|json|css|html|svg|txt|xml)$/i,
        threshold: 1024, // Compress files larger than 1kb
        deleteOriginFile: false,
        verbose: true,
      }),
    // Add more aggressive image optimization for production
    isProduction &&
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 75, // Lower quality for better compression
          progressive: true,
        },
        pngquant: {
          quality: [0.65, 0.8], // More aggressive compression
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: "removeViewBox",
              active: false,
            },
            {
              name: "removeEmptyAttrs",
              active: false,
            },
            {
              name: "cleanupIDs",
              active: true,
            },
          ],
        },
        webp: {
          quality: 75, // Lower quality for better compression
        },
      }),
    // Add visualization in non-CI builds
    isProduction &&
      process.env.CI !== "true" &&
      visualizer({
        open: false,
        filename: "dist/stats.html",
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
        passes: 2, // Multiple passes for better minification
      },
      mangle: {
        properties: false, // Don't mangle properties
      },
    },
    cssMinify: "lightningcss", // Use lightningcss for better CSS optimization
    // Set a reasonable target for modern browsers
    target: "es2018",
    // Disable source maps in production
    sourcemap: false,
    // Improve chunk splitting for better caching
    rollupOptions: {
      output: {
        // Improved manual chunks strategy to reduce unused code
        manualChunks: (id) => {
          // React core + hooks - keep all React core functionality together
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/scheduler/") ||
            id.includes("node_modules/use-sync-external-store/")
          ) {
            return "react-core";
          }

          // Only components used in the app
          if (id.includes("node_modules/react-icons/")) {
            return "icons";
          }

          // UI libraries - only include the ones you're using
          if (id.includes("node_modules/@radix-ui/")) {
            return "ui-components";
          }

          if (id.includes("node_modules/framer-motion/")) {
            return "animations";
          }

          // Other libs
          if (id.includes("node_modules/")) {
            return "vendor";
          }
        },
        // Ensure filenames include content hash for proper cache invalidation
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
        // Control dynamic imports
        inlineDynamicImports: false,
      },
    },
    // Improve tree-shaking
    modulePreload: {
      polyfill: false, // Modern browsers support modulepreload
    },
    // Increase chunk size warning limit to avoid unnecessary splitting
    chunkSizeWarningLimit: 1000,
    // Reduce CSS size
    cssCodeSplit: true,
  },
  // Optimize server during development
  server: {
    open: true,
    cors: true,
    hmr: {
      overlay: true,
    },
  },
  preview: {
    open: true,
    port: 4173,
    // Remove incorrect Content-Encoding header that's causing decompression issues
    headers: {
      "Cache-Control": "public, max-age=31536000",
      "X-Content-Type-Options": "nosniff",
    },
  },
  // Optimize asset handling
  assetsInclude: ["**/*.webp", "**/*.avif"],
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react/jsx-runtime"],
    esbuildOptions: {
      minify: true,
      treeShaking: true,
    },
  },
  // Improve tree-shaking
  esbuild: {
    treeShaking: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
});
