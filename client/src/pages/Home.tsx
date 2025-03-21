import { lazy, Suspense } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/components/sections/Hero";

// Lazily load components that aren't needed for initial render
const About = lazy(() =>
  import("@/components/sections/About").then((module) => ({
    default: module.About,
  }))
);
const Portfolio = lazy(() =>
  import("@/components/sections/Portfolio").then((module) => ({
    default: module.Portfolio,
  }))
);
const Experience = lazy(() =>
  import("@/components/sections/Experience").then((module) => ({
    default: module.Experience,
  }))
);
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((module) => ({
    default: module.Contact,
  }))
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />

        <Suspense fallback={<div className="h-screen"></div>}>
          <section id="about">
            <About />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="portfolio">
            <Portfolio />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
