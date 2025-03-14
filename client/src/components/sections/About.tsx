import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SkillsGraph } from "./SkillsGraph";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-lg text-muted-foreground mb-6">
              I'm a software engineer passionate about building modern web
              applications and innovative solutions. I specialise in creating
              scalable, efficient systems using cutting-edge technologies.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My journey in technology began at the age of 8 when I wrote my
              first lines of code. This early passion for programming has
              evolved into a lifelong pursuit of technical excellence. Since
              then, I've worked with various startups and enterprises, helping
              them build robust and efficient systems.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative bg-card/50 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
                  Professional Overview
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full-stack development with modern frameworks</li>
                  <li>• Cloud architecture and deployment</li>
                  <li>• Performance optimisation and scaling</li>
                  <li>• Team leadership and mentoring</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl"
        >
          <SkillsGraph />
        </motion.div>
      </div>
    </section>
  );
}
