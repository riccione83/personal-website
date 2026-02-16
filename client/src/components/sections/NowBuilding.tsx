import { ExternalLink, Sparkles } from "lucide-react";

export function NowBuilding() {
  return (
    <section id="now-building" className="py-6 md:py-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-4 md:p-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wide text-primary/80">
                <Sparkles className="h-3.5 w-3.5" />
                Featured Project
              </p>
              <h2 className="inline-flex items-center gap-2 text-lg font-semibold">
                tiny-llm
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-3xl">
                A dual-track AI project combining a 7B LoRA/QLoRA workflow with
                grounded web QA and a local OpenAI-compatible serving layer.
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <li>7B-centered pipeline with Qwen2.5-7B + LoRA/QLoRA</li>
                <li>In-house training on consumer-grade hardware with reproducible runs</li>
                <li>Grounded QA stack with web retrieval and confidence-gated routing</li>
              </ul>
            </div>
            <a
              href="https://github.com/riccione83/tiny-llm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              aria-label="Open tiny-llm repository"
            >
              View project
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
