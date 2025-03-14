import { useState, useMemo } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Import the skills data
const skills = [
  {
    title: "Javascript",
    competency: 4,
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "Node.JS",
    competency: 5,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "React",
    competency: 2,
    category: ["Web Development", "Javascript"],
  },
  {
    title: "Typescript",
    competency: 5,
    category: ["Web Development", "Languages", "Javascript"],
  },
  {
    title: "Amazon Web Services",
    competency: 4,
    category: ["Web Development", "Tools"],
  },
  {
    title: "Google Cloud",
    competency: 5,
    category: ["Web Development", "Databases"],
  },
  {
    title: "PostgreSQL/SQLite3/SQL/Redshift",
    competency: 4,
    category: ["Web Development", "Databases", "Languages"],
  },
  {
    title: "Python",
    competency: 5,
    category: ["Languages", "Python", "ML Engineering"],
  },
  {
    title: "Docker",
    competency: 5,
    category: ["Tools", "Data Engineering"],
  },
  {
    title: "HTML + SASS/SCSS/CSS",
    competency: 4,
    category: ["Web Development", "Languages"],
  },
];

const categories = [
  "Web Development",
  "Languages",
  "Javascript",
  "Tools",
  "Databases",
  "ML Engineering",
  "Data Engineering",
  "Python",
];

const CompetencyBar = ({ level }: { level: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className={`h-3 w-6 rounded-sm ${
          i <= level ? 'bg-primary' : 'bg-muted'
        }`}
      />
    ))}
  </div>
);

export function SkillsGraph() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "ALL") return skills;
    return skills.filter(skill => skill.category.includes(selectedCategory));
  }, [selectedCategory]);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground italic">
          Note: I think these sections are silly, but everyone seems to have one. Here is a "mostly" honest overview of my skills.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        <motion.button
          key="ALL"
          onClick={() => setSelectedCategory("ALL")}
          className={`px-3 py-1 rounded-md text-sm transition-colors ${
            selectedCategory === "ALL"
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ALL
        </motion.button>
        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <Card>
        <CardContent className="p-6">
          <motion.div
            layout
            className="grid gap-4"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between gap-4"
              >
                <div className="w-48 font-medium">{skill.title}</div>
                <CompetencyBar level={skill.competency} />
                <div className="text-sm text-muted-foreground">
                  {skill.competency}/5
                </div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}