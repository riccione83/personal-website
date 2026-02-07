/**
 * Minimal iOS Safari viewport helper.
 * Keeps only safe fixes to avoid layout shifts on mobile navigation.
 */

function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

function updateViewportHeightVar() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

document.addEventListener("DOMContentLoaded", function () {
  if (!(isIOS() && isSafari())) return;

  document.documentElement.classList.add("ios-mobile");
  document.body.classList.add("ios-mobile-body");
  updateViewportHeightVar();

  window.addEventListener("orientationchange", () => {
    setTimeout(updateViewportHeightVar, 120);
  });

  window.addEventListener("resize", () => {
    setTimeout(updateViewportHeightVar, 120);
  });
});

export default {};
