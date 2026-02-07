import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const highlights = [
  { label: "AI product delivery", value: "From idea to production" },
  { label: "Leadership style", value: "Hands-on, high standards" },
  { label: "Systems thinking", value: "Scalable by design" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[86vh] pt-24 pb-14 md:pb-20 flex items-center"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary/80">
              London-based | Engineering leadership in product teams
            </p>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight">
              Engineering Manager and Technical Lead building
              <span className="text-primary"> high-performing teams</span> and
              scalable products.
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">
              I help product organizations ship faster with better engineering
              quality. My work spans frontend, backend, cloud architecture, and
              team development in fast growth environments.
            </p>
            <p className="mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
              I enjoy working on AI-first and research-driven products with a
              high technical bar, especially where execution quality and
              long-term platform thinking matter.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#experience">View Impact</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:rizzo.riccardo.83@gmail.com">Contact Me</a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-card/80 p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20 border border-primary/20">
                <AvatarImage
                  src="/images/riky_squared.jpg"
                  alt="Riccardo Rizzo"
                  loading="eager"
                />
                <AvatarFallback>RR</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-lg">Riccardo Rizzo</p>
                <p className="text-sm text-muted-foreground">
                  Tech Lead • Engineering Manager
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-primary/10 bg-primary/[0.03] px-4 py-3"
                >
                  <p className="text-xs uppercase tracking-wide text-primary/70">
                    {item.label}
                  </p>
                  <p className="mt-1 font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="inline-flex items-center justify-center rounded-full border border-primary/20 p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
