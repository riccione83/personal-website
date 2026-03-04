import type { BlogArticle } from "@/data/blog";

export const SITE_URL = "https://www.riccardorizzo.eu";

export type JsonLdSchema = Record<string, unknown>;

export interface BookEditionInput {
  name: string;
  url: string;
  inLanguage: string;
  isbn?: string;
  datePublished?: string;
  image?: string;
  description?: string;
}

export interface BookSchemaInput {
  name: string;
  description: string;
  canonicalPath: string;
  authorName: string;
  inLanguage: string;
  datePublished?: string;
  image?: string;
  editions?: BookEditionInput[];
}

export function toAbsoluteUrl(value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  const normalized = value.startsWith("/") ? value : `/${value}`;
  return `${SITE_URL}${normalized}`;
}

export function toCanonicalUrl(path: string) {
  return toAbsoluteUrl(path);
}

export function buildBlogPostingSchema(post: BlogArticle): JsonLdSchema {
  const canonical = toCanonicalUrl(`/blog/${post.slug}`);
  const image = toAbsoluteUrl(post.coverImage || "/images/riky_squared.jpg");

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author || "Riccardo Rizzo",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Riccardo Rizzo",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    url: canonical,
    keywords: post.tags?.join(", "),
  };
}

export function buildBookSchema(book: BookSchemaInput): JsonLdSchema {
  const canonical = toCanonicalUrl(book.canonicalPath);

  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.name,
    description: book.description,
    url: canonical,
    inLanguage: book.inLanguage,
    ...(book.datePublished ? { datePublished: book.datePublished } : {}),
    ...(book.image ? { image: toAbsoluteUrl(book.image) } : {}),
    author: {
      "@type": "Person",
      name: book.authorName,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    ...(book.editions?.length
      ? {
          workExample: book.editions.map((edition) => ({
            "@type": "Book",
            name: edition.name,
            url: edition.url,
            inLanguage: edition.inLanguage,
            ...(edition.datePublished
              ? { datePublished: edition.datePublished }
              : {}),
            ...(edition.image ? { image: toAbsoluteUrl(edition.image) } : {}),
            ...(edition.description
              ? { description: edition.description }
              : {}),
            ...(edition.isbn ? { isbn: edition.isbn } : {}),
          })),
        }
      : {}),
  };
}
