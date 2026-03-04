import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredBook } from "@/data/book";
import { buildBookSchema } from "@/lib/schema";
import { ExternalLink } from "lucide-react";
import { useMemo } from "react";

export default function BookPage() {
  const bookSchema = useMemo(
    () =>
      buildBookSchema({
        name: featuredBook.name,
        description: featuredBook.description,
        canonicalPath: featuredBook.canonicalPath,
        inLanguage: featuredBook.inLanguage,
        authorName: featuredBook.authorName,
        image: featuredBook.image,
        datePublished: featuredBook.datePublished,
        editions: featuredBook.editions,
      }),
    []
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Books | Riccardo Rizzo"
        description={featuredBook.description}
        path={featuredBook.canonicalPath}
        type="website"
        image={featuredBook.image}
        jsonLd={bookSchema}
        jsonLdId="book-jsonld"
      />
      <Navigation />
      <main className="flex-1 pt-24 pb-10 md:pb-12">
        <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl font-bold">{featuredBook.name}</h1>
            <p className="mt-3 text-muted-foreground">{featuredBook.description}</p>
            {featuredBook.datePublished ? (
              <p className="mt-2 text-sm text-muted-foreground">
                First published: {featuredBook.datePublished}
              </p>
            ) : null}
          </header>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {featuredBook.editions.map((edition) => (
              <Card
                key={edition.url}
                className="border-primary/10 hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[2/3] bg-muted/40">
                  <img
                    src={edition.coverImage}
                    alt={edition.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <p className="text-xs uppercase tracking-wide text-primary/80">
                    {edition.inLanguage === "it" ? "Italian" : "English"}
                  </p>
                  <CardTitle className="text-xl">{edition.name}</CardTitle>
                  {edition.datePublished ? (
                    <p className="text-sm text-muted-foreground">
                      Published: {edition.datePublished}
                    </p>
                  ) : null}
                  {edition.isbn ? (
                    <p className="text-sm text-muted-foreground">ISBN: {edition.isbn}</p>
                  ) : null}
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {edition.description}
                  </p>
                  {edition.details?.length ? (
                    <div className="mb-4 space-y-3 text-sm text-muted-foreground">
                      {edition.details.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                  {edition.highlights?.length ? (
                    <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                      {edition.highlights.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {edition.audience?.length ? (
                    <div className="mb-4">
                      <p className="mb-2 text-sm font-medium">This book is for you if:</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {edition.audience.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <Button asChild>
                    <a
                      href={edition.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Amazon
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
