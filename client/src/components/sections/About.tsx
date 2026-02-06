import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SkillsGraph } from "./SkillsGraph";
import { NowBuilding } from "./NowBuilding";

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
              I am an Engineering Manager and hands-on technical leader with a
              background across web, mobile, and backend systems. I focus on
              shipping products that are reliable, maintainable, and measurable
              in business impact.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Over the years I have grown and mentored engineering teams,
              improved delivery processes, and supported product strategy in
              fast-moving environments. I enjoy bridging leadership and
              execution to help teams move faster without sacrificing quality.
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
                  <li>• Engineering leadership and team growth</li>
                  <li>• React, TypeScript, Node.js and cloud architecture</li>
                  <li>• Product-minded delivery with measurable outcomes</li>
                  <li>• Hiring, coaching, and cross-functional collaboration</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="w-full max-w-4xl">
          <NowBuilding />
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
