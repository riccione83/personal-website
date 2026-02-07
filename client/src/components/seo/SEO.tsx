import { useEffect } from "react";

const SITE_URL = "https://www.riccardorizzo.eu";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  jsonLd?: Record<string, unknown> | null;
}

function toAbsoluteUrl(value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  const normalized = value.startsWith("/") ? value : `/${value}`;
  return `${SITE_URL}${normalized}`;
}

function upsertMeta(
  selectorAttr: "name" | "property",
  selectorValue: string,
  content: string
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${selectorAttr}="${selectorValue}"]`
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(selectorAttr, selectorValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertCanonical(url: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  );
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", url);
}

function upsertJsonLd(jsonLd: Record<string, unknown> | null) {
  const scriptId = "dynamic-seo-jsonld";
  const existing = document.getElementById(scriptId);

  if (!jsonLd) {
    if (existing) existing.remove();
    return;
  }

  const script =
    existing ||
    (() => {
      const node = document.createElement("script");
      node.id = scriptId;
      node.type = "application/ld+json";
      document.head.appendChild(node);
      return node;
    })();

  script.textContent = JSON.stringify(jsonLd);
}

export function SEO({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  jsonLd = null,
}: SEOProps) {
  useEffect(() => {
    const absoluteUrl = toAbsoluteUrl(path);
    const absoluteImage = image ? toAbsoluteUrl(image) : undefined;

    document.title = title;
    upsertCanonical(absoluteUrl);

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "index, follow");

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", absoluteUrl);
    upsertMeta("property", "og:site_name", "Riccardo Rizzo");

    if (absoluteImage) {
      upsertMeta("property", "og:image", absoluteImage);
      upsertMeta("property", "og:image:alt", title);
      upsertMeta("name", "twitter:card", "summary_large_image");
      upsertMeta("name", "twitter:image", absoluteImage);
    } else {
      upsertMeta("name", "twitter:card", "summary");
    }

    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    if (publishedTime) {
      upsertMeta("property", "article:published_time", publishedTime);
    }
    if (modifiedTime) {
      upsertMeta("property", "article:modified_time", modifiedTime);
    }
    if (author) {
      upsertMeta("property", "article:author", author);
    }

    upsertJsonLd(jsonLd);
  }, [
    author,
    description,
    image,
    jsonLd,
    modifiedTime,
    path,
    publishedTime,
    title,
    type,
  ]);

  return null;
}

