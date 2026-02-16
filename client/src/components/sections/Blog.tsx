import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { blogArticles } from "@/data/blog";

export function Blog() {
  const sortedArticles = [...blogArticles].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <section id="blog" className="py-16 md:py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Blog</h2>
          <p className="mt-2 text-muted-foreground">
            Notes, experiments, and technical deep-dives.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {sortedArticles.map((article) => (
            <Card
              key={article.slug}
              className="border-primary/10 hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <p className="text-xs uppercase tracking-wide text-primary/80">
                  {article.source} • {article.date.slice(0, 4)}
                </p>
                <CardTitle className="text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{article.excerpt}</p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  aria-label={`Read article: ${article.title}`}
                >
                  Read article
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
