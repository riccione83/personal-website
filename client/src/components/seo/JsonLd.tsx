import { useEffect } from "react";
import type { JsonLdSchema } from "@/lib/schema";

interface JsonLdProps {
  schema: JsonLdSchema | null;
  id: string;
  debugLabel?: string;
}

function isJsonLdDebugEnabled() {
  if (!import.meta.env.DEV || typeof window === "undefined") return false;

  const params = new URLSearchParams(window.location.search);
  if (params.get("debugJsonLd") === "1") return true;

  return window.localStorage.getItem("debugJsonLd") === "1";
}

export function JsonLd({ schema, id, debugLabel }: JsonLdProps) {
  useEffect(() => {
    const existing = document.getElementById(id);

    if (!schema) {
      if (existing) existing.remove();
      return;
    }

    const script =
      existing ||
      (() => {
        const node = document.createElement("script");
        node.id = id;
        node.type = "application/ld+json";
        document.head.appendChild(node);
        return node;
      })();

    const payload = JSON.stringify(schema);
    script.textContent = payload;

    if (isJsonLdDebugEnabled()) {
      console.info(`[json-ld:${debugLabel || id}]`, schema);
    }

    return () => {
      const current = document.getElementById(id);
      if (current) current.remove();
    };
  }, [debugLabel, id, schema]);

  return null;
}
