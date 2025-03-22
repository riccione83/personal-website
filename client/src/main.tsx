import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// Import iOS Safari fixes
import "./iosFix";
// Import iOS Safari specific CSS
import "./iosSafari.css";

// Add polyfill for iOS Safari
if (typeof window !== "undefined") {
  // Fix for older iOS Safari versions that don't support certain features
  window.requestIdleCallback =
    window.requestIdleCallback ||
    function (cb) {
      return setTimeout(function () {
        const start = Date.now();
        cb({
          didTimeout: false,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - start));
          },
        });
      }, 1);
    };
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

// Add a small delay to help with iOS Safari rendering
setTimeout(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}, 10);
