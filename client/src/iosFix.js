/**
 * iOS Safari Blank Page Fix
 * This script addresses common issues with iOS Safari rendering blank pages
 */

// Helper to detect iOS
function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

// Helper to detect Safari
function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

// Helper to detect if in mobile view
function isMobileView() {
  return window.innerWidth <= 768; // Typical mobile breakpoint
}

// Fix iOS Safari viewport height issue
function fixIOSHeight() {
  if (isIOS()) {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // Set explicit heights
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.getElementById("root").style.minHeight = "100%";
  }
}

// Force redraw for iOS Safari
function forceRedraw() {
  document.body.style.display = "none";
  // Force a layout calculation
  document.body.offsetHeight;
  document.body.style.display = "";
}

// Mobile Safari root element fix
function fixRootElementForMobileSafari() {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.style.display = "flex";
    rootElement.style.flexDirection = "column";
    rootElement.style.minHeight = "100%";
    // Force Safari to recognize the element
    rootElement.style.transform = "translateZ(0)";
  }
}

// Apply mobile-specific overrides
function applyMobileOverrides() {
  if (isMobileView()) {
    // Add class to help with CSS targeting
    document.documentElement.classList.add("ios-mobile");
    document.body.classList.add("ios-mobile-body");

    // Force body to take full height and scroll properly
    document.body.style.position = "relative";
    document.body.style.overflowY = "auto";
    document.body.style.overscrollBehavior = "none";

    const style = document.createElement("style");
    style.textContent = `
      @media (max-width: 768px) {
        html, body {
          height: 100% !important;
          overflow-x: hidden !important;
          position: relative !important;
        }
        #root {
          min-height: 100% !important;
          display: flex !important;
          flex-direction: column !important;
        }
        /* Disable any fixed positioning that might cause issues */
        .fixed, [class*="fixed-"] {
          position: absolute !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Execute fixes when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  if (isIOS() && isSafari()) {
    console.log("iOS Safari detected, applying fixes");

    // Apply fixes
    fixIOSHeight();
    forceRedraw();
    fixRootElementForMobileSafari();
    applyMobileOverrides();

    // Fix for orientation changes
    window.addEventListener("orientationchange", function () {
      setTimeout(function () {
        fixIOSHeight();
        forceRedraw();
      }, 100);
    });

    // Also listen for resize events
    window.addEventListener("resize", function () {
      setTimeout(function () {
        fixIOSHeight();
        forceRedraw();
      }, 100);
    });
  }
});

export default {};
