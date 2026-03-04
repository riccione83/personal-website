import { useEffect } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { toAbsoluteUrl, type JsonLdSchema } from "@/lib/schema";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  jsonLd?: JsonLdSchema | null;
  jsonLdId?: string;
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
  jsonLdId = "dynamic-seo-jsonld",
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
  }, [
    author,
    description,
    image,
    modifiedTime,
    path,
    publishedTime,
    title,
    type,
  ]);

  return <JsonLd schema={jsonLd} id={jsonLdId} debugLabel={path} />;
}
