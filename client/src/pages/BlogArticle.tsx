import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { getArticleBySlug } from "@/data/blog";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useRoute } from "wouter";

export default function BlogArticlePage() {
  const [matched, params] = useRoute("/blog/:slug");
  const article = matched ? getArticleBySlug(params.slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-24 pb-10 md:pb-12">
          <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold">Article not found</h1>
            <p className="mt-3 text-muted-foreground">
              The requested post is not available.
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-flex text-primary hover:text-primary/80"
            >
              Back to blog
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-10 md:pb-12">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <p className="text-xs uppercase tracking-wide text-primary/80">
            {article.source} • {article.date}{" "}
            {article.readTime ? `• ${article.readTime}` : ""}
          </p>
          {article.author ? (
            <p className="mt-3 text-sm font-medium">{article.author}</p>
          ) : null}
          {article.authorRole ? (
            <p className="text-sm text-muted-foreground">{article.authorRole}</p>
          ) : null}
          <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{article.excerpt}</p>

          {article.coverImage ? (
            <img
              src={article.coverImage}
              alt={article.title}
              className="mt-8 w-full rounded-xl border border-primary/10 object-cover"
              loading="eager"
            />
          ) : null}

          <div className="prose prose-zinc dark:prose-invert mt-10 max-w-none">
            {article.sections.map((section) => (
              <section key={section.title} className="mb-8">
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph, idx) => (
                  <p key={`${section.title}-${idx}`}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.codeBlocks?.map((block, idx) => (
                  <pre key={`${section.title}-code-${idx}`}>
                    <code className={`language-${block.language}`}>
                      {block.code}
                    </code>
                  </pre>
                ))}
                {section.examples?.map((example) => (
                  <div key={example.label} className="rounded-lg border border-primary/10 p-4 not-prose">
                    <h3 className="text-base font-semibold">{example.label}</h3>
                    <p className="mt-2 text-sm text-muted-foreground whitespace-pre-wrap">
                      <span className="font-semibold text-foreground">Prompt:</span>{" "}
                      {example.prompt}
                    </p>
                    <pre className="mt-3 rounded-md bg-muted p-3 text-sm overflow-x-auto">
                      <code>{example.response}</code>
                    </pre>
                  </div>
                ))}
              </section>
            ))}

            {article.originalUrl ? (
              <>
                <h2>Original publication</h2>
                <p>
                  This post is also available on LinkedIn:
                  {" "}
                  <a
                    href={article.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Open original article
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </p>
              </>
            ) : null}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
