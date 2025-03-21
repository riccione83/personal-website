import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, memo } from "react";

// Memoized component to reduce re-renders
const FloatingElement = memo(
  ({ delay = 0, children }: { delay?: number; children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  )
);

FloatingElement.displayName = "FloatingElement";

// Optimize background pattern for performance
const BackgroundPattern = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 opacity-20">
      <div
        className="absolute rounded-full bg-primary/20"
        style={{ width: 100, height: 100, left: "20%", top: "20%" }}
      />
      <div
        className="absolute rounded-full bg-primary/20"
        style={{ width: 80, height: 80, left: "70%", top: "30%" }}
      />
      <div
        className="absolute rounded-full bg-primary/20"
        style={{ width: 120, height: 120, left: "80%", top: "60%" }}
      />
      <div
        className="absolute rounded-full bg-primary/20"
        style={{ width: 90, height: 90, left: "10%", top: "70%" }}
      />
    </div>
  );
});

BackgroundPattern.displayName = "BackgroundPattern";

export function Hero() {
  const [text, setText] = useState(
    "A passionate software engineer specialising in web development and cloud architecture"
  );
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      style={{ height: "100vh", maxHeight: "900px" }}
    >
      <BackgroundPattern />
      <div
        className="container px-4 py-16 md:py-24 relative"
        style={{ transform: "translateY(0)", opacity: 1 }}
      >
        <div className="text-center">
          <div className="flex flex-col items-center justify-center gap-6 mb-8">
            <div
              className="relative"
              style={{ width: "160px", height: "160px" }}
            >
              <Avatar className="w-40 h-40 border-4 border-primary/20 shadow-lg">
                <AvatarImage
                  src="/images/riky_squared.jpg"
                  alt="Riccardo"
                  className="object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width="160"
                  height="160"
                />
                <AvatarFallback>RR</AvatarFallback>
              </Avatar>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 -z-10" />
            </div>
            <div>
              <h1
                className="text-4xl md:text-6xl font-bold"
                style={{ minHeight: "60px" }}
              >
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Hello, I'm Riccardo
                </span>
              </h1>
            </div>
          </div>

          <div>
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              style={{ height: "80px", minHeight: "80px" }}
            >
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ minHeight: "48px" }}
          >
            <Button
              size="lg"
              className="hover:scale-105 transition-transform relative overflow-hidden group"
              asChild
            >
              <a href="#portfolio">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-primary/20" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-transform relative overflow-hidden group"
              asChild
            >
              <a href="#contact">
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-primary/10" />
              </a>
            </Button>
          </div>

          <a
            href="#about"
            className="mt-16 inline-block"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
