import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const socialLinks = {
  github: "https://github.com/riccione83",
  linkedin: "https://www.linkedin.com/in/rikyrizzo/",
  twitter: "https://x.com/riccione83",
  facebook: "https://www.facebook.com/riccione83",
  email: "mailto:rizzo.riccardo.83@gmail.com",
};

export function Contact() {
  return (
    <section id="contact" className="pt-16 md:pt-20 pb-6 md:pb-8 bg-muted/30">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>

        <Card className="max-w-lg w-full">
          <CardHeader>
            <CardTitle>Connect With Me</CardTitle>
            <CardDescription>
              Feel free to reach out through any of these platforms!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SocialLink
                  icon={<FaEnvelope className="h-5 w-5" />}
                  label="Email"
                  href={socialLinks.email}
                  delay={0.1}
                />
                <SocialLink
                  icon={<FaGithub className="h-5 w-5" />}
                  label="GitHub"
                  href={socialLinks.github}
                  delay={0.2}
                />
                <SocialLink
                  icon={<FaLinkedin className="h-5 w-5" />}
                  label="LinkedIn"
                  href={socialLinks.linkedin}
                  delay={0.3}
                />
                <SocialLink
                  icon={<FaTwitter className="h-5 w-5" />}
                  label="Twitter/X"
                  href={socialLinks.twitter}
                  delay={0.4}
                />
                <SocialLink
                  icon={<FaFacebook className="h-5 w-5" />}
                  label="Facebook"
                  href={socialLinks.facebook}
                  delay={0.5}
                />
              </div>

              <div className="text-center text-muted-foreground mt-4">
                <p>
                  Open to technical leadership roles, consulting, and
                  collaborations on web products and platform engineering.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  delay: number;
  className?: string;
}

function SocialLink({
  icon,
  label,
  href,
  delay,
  className = "",
}: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 p-4 rounded-lg border border-primary/10 bg-card hover:bg-primary/5 transition-colors ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex-shrink-0 text-primary">{icon}</div>
      <div className="font-medium">{label}</div>
    </motion.a>
  );
}
