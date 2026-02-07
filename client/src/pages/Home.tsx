import { lazy, Suspense } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { SEO } from "@/components/seo/SEO";

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
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Riccardo Rizzo | Engineering Manager & Technical Lead"
        description="Engineering Manager and Technical Lead focused on scalable products, cloud architecture, and high-performing engineering teams."
        path="/"
        image="/images/riky_squared.jpg"
        type="website"
      />
      <ScrollProgress />
      <Navigation />
      <main className="flex-1">
        <Hero />

        <Suspense fallback={<div className="h-screen"></div>}>
          <About />
          <Blog />
          <Experience />
          <Portfolio />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
