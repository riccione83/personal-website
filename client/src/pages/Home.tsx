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
const Blog = lazy(() =>
  import("@/components/sections/Blog").then((module) => ({
    default: module.Blog,
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
          <About />
          <Experience />
          <Portfolio />
          <Blog />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
