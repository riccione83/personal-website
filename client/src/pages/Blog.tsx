import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogArticles } from "@/data/blog";
import { Link } from "wouter";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-24 pb-10 md:pb-12">
        <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
            <p className="mt-3 text-muted-foreground">
              Articles on engineering, AI experiments, and technical leadership.
            </p>
          </header>

          <div className="mx-auto grid max-w-4xl gap-6">
            {blogArticles.map((article) => (
              <Card
                key={article.slug}
                className="border-primary/10 hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <p className="text-xs uppercase tracking-wide text-primary/80">
                    {article.source} • {article.date}{" "}
                    {article.readTime ? `• ${article.readTime}` : ""}
                  </p>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Read article
                  </Link>
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
