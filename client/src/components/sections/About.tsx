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
              I combine technical depth with organizational leadership. I work
              directly with engineers, product, and design to ship robust
              systems while improving execution quality across teams.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Over the years I have led team growth, improved delivery
              predictability, and raised engineering standards in fast-paced
              environments. My style is pragmatic: clear priorities, strong
              ownership, and measurable outcomes.
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
                  What I Bring
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• End-to-end ownership from architecture to delivery</li>
                  <li>• Team scaling, hiring, mentorship, and IC growth</li>
                  <li>• Strong product collaboration and decision making</li>
                  <li>• React, TypeScript, Node.js, AWS and GCP expertise</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SkillsGraph />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
