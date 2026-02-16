type AnalyticsProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number | boolean>
    ) => void;
    plausible?: (eventName: string, options?: { props?: AnalyticsProps }) => void;
  }
}

function toStorageKey(eventName: string) {
  return `analytics:${eventName}:count`;
}

function incrementLocalMetric(eventName: string) {
  try {
    const key = toStorageKey(eventName);
    const current = Number(window.localStorage.getItem(key) ?? "0");
    window.localStorage.setItem(key, String(current + 1));
  } catch {
    // Local metrics are best effort only.
  }
}

export function trackEvent(eventName: string, props: AnalyticsProps = {}) {
  if (typeof window === "undefined") return;
  const sanitizedProps = Object.fromEntries(
    Object.entries(props).filter(([, value]) => value !== undefined)
  ) as Record<string, string | number | boolean>;

  incrementLocalMetric(eventName);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, sanitizedProps);
  }

  if (typeof window.plausible === "function") {
    window.plausible(eventName, { props: sanitizedProps });
  }

  window.dispatchEvent(
    new CustomEvent("app:analytics", {
      detail: { eventName, props: sanitizedProps },
    })
  );
}
