import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Publications", href: "#portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [location] = useLocation();
  const isHome = location === "/";
  const lastScrollY = useRef(0);

  const resolveHref = (href: string) => {
    if (href.startsWith("/")) return href;
    return isHome ? href : `/${href}`;
  };

  const resetHorizontalScroll = () => {
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: window.scrollY, left: 0, behavior: "auto" });
      document.documentElement.scrollLeft = 0;
      document.body.scrollLeft = 0;
    });
  };

  const handleMobileNavClick = () => {
    setIsOpen(false);
    resetHorizontalScroll();
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 24 || isOpen) {
        setIsNavVisible(true);
        lastScrollY.current = currentY;
        return;
      }

      const delta = currentY - lastScrollY.current;
      if (Math.abs(delta) < 8) return;

      setIsNavVisible(delta < 0);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-background/95 backdrop-blur z-50 border-b transition-transform duration-300 ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      } md:translate-y-0`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href={resolveHref("#home")}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            aria-label="Riccardo Rizzo - Home"
            onClick={resetHorizontalScroll}
          >
            Riccardo Rizzo
          </a>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={resolveHref(item.href)}
                className="text-foreground/70 hover:text-foreground transition-colors"
                onClick={resetHorizontalScroll}
              >
                {item.name}
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() =>
              setIsOpen((prev) => {
                const next = !prev;
                if (next) setIsNavVisible(true);
                return next;
              })
            }
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={resolveHref(item.href)}
                className="block py-2 text-foreground/70 hover:text-foreground transition-colors"
                onClick={handleMobileNavClick}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
