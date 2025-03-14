import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Use the same social links as in the Contact component
const socialLinks = {
  github: "https://github.com/riccione83",
  linkedin: "https://www.linkedin.com/in/rikyrizzo/",
  twitter: "https://x.com/riccione83",
};

export function Footer() {
  return (
    <footer className="bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Riccardo Rizzo. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
