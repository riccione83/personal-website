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
    // Enable compression for production
    isProduction &&
      viteCompression({
        algorithm: "gzip",
        ext: ".gz",
        filter: /\.(js|css|html|svg)$/i,
        threshold: 10240, // Only compress files larger than 10kb
      }),
    isProduction &&
      viteCompression({
        algorithm: "brotliCompress",
        ext: ".br",
        filter: /\.(js|css|html|svg)$/i,
        threshold: 10240, // Only compress files larger than 10kb
      }),
    // Add image optimization for production
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
          quality: 80,
        },
        pngquant: {
          quality: [0.7, 0.8],
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
          ],
        },
        webp: {
          quality: 80,
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
      },
    },
    cssMinify: true,
    // Set a reasonable target for modern browsers
    target: "es2018",
    // Enable source maps for production to help with debugging
    sourcemap: false,
    // Improve chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Create specific chunks for large dependencies
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "vendor-react";
            }
            if (id.includes("framer-motion")) {
              return "vendor-motion";
            }
            if (id.includes("@radix-ui")) {
              return "vendor-radix";
            }
            if (id.includes("lucide")) {
              return "vendor-icons";
            }
            // Group other dependencies
            return "vendor";
          }

          // Group by feature folders
          if (id.includes("/src/components/ui/")) {
            return "ui-components";
          }

          return undefined;
        },
        // Ensure filenames include content hash for proper cache invalidation
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
    // Enable small chunk size warnings
    chunkSizeWarningLimit: 500,
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
  },
  // Optimize asset handling
  assetsInclude: ["**/*.webp", "**/*.avif"],
  // Limit concurrent requests during dev
  optimizeDeps: {
    force: false,
  },
});
