import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingElement = ({
  delay = 0,
  children,
}: {
  delay?: number;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay,
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 2,
    }}
  >
    {children}
  </motion.div>
);

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/5"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export function Hero() {
  const [text, setText] = useState("");
  const fullText =
    "A passionate software engineer specializing in web development and cloud architecture";
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <BackgroundPattern />
      <motion.div
        className="container px-4 py-16 md:py-24 relative"
        style={{ y, opacity, scale }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center justify-center gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Avatar className="w-40 h-40 border-4 border-primary/20 shadow-lg">
                <AvatarImage
                  src="/images/riky_squared.jpg"
                  alt="Riccardo"
                  className="object-cover"
                />
                <AvatarFallback>RR</AvatarFallback>
              </Avatar>
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 -z-10"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
            <FloatingElement>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Hello, I'm Riccardo
                </span>
              </h1>
            </FloatingElement>
          </div>

          <FloatingElement delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto h-20">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </FloatingElement>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="hover:scale-105 transition-transform relative overflow-hidden group"
              asChild
            >
              <a href="#portfolio">
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
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
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </a>
            </Button>
          </motion.div>

          <motion.a
            href="#about"
            className="mt-16 inline-block"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
