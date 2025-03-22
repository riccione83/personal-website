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

// Execute fixes when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Handle iOS Safari specific issues
  if (isIOS() && isSafari()) {
    console.log("iOS Safari detected, applying fixes");

    // Force layout recalculation
    document.body.style.display = "none";
    setTimeout(function () {
      document.body.style.display = "";
    }, 0);

    // Add viewport height fix
    const viewportHeight = window.innerHeight;
    document.documentElement.style.setProperty(
      "--vh",
      `${viewportHeight * 0.01}px`
    );

    // Fix for orientation changes
    window.addEventListener("orientationchange", function () {
      setTimeout(function () {
        const newViewportHeight = window.innerHeight;
        document.documentElement.style.setProperty(
          "--vh",
          `${newViewportHeight * 0.01}px`
        );

        // Force redraw
        document.body.style.display = "none";
        document.body.offsetHeight; // Force reflow
        document.body.style.display = "";
      }, 50);
    });

    // Fix scroll behavior
    document.body.style.webkitOverflowScrolling = "touch";

    // Clear any existing iOS Safari caches that might be causing issues
    if (window.applicationCache && window.applicationCache.swapCache) {
      try {
        window.applicationCache.swapCache();
      } catch (e) {
        console.log("Cache swap failed, but that's often ok");
      }
    }
  }
});

export default {};
