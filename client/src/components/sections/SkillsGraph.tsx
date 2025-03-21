import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Import the skills data
const skills = [
  {
    title: "JavaScript",
    competency: 4,
    category: ["Web Development", "Languages", "Frontend"],
  },
  {
    title: "TypeScript",
    competency: 5,
    category: ["Web Development", "Languages", "Frontend"],
  },
  {
    title: "React & React Native",
    competency: 4,
    category: ["Web Development", "Frontend", "Mobile"],
  },
  {
    title: "Next.js",
    competency: 4,
    category: ["Web Development", "Frontend", "Full Stack"],
  },
  {
    title: "Node.js & Express",
    competency: 5,
    category: ["Web Development", "Backend"],
  },
  {
    title: "AWS",
    competency: 4,
    category: ["Cloud", "DevOps"],
  },
  {
    title: "Google Cloud Platform",
    competency: 5,
    category: ["Cloud", "DevOps"],
  },
  {
    title: "PostgreSQL & MongoDB",
    competency: 4,
    category: ["Databases", "Backend"],
  },
  {
    title: "Python",
    competency: 5,
    category: ["Languages", "Backend", "Data"],
  },
  {
    title: "Docker & Kubernetes",
    competency: 5,
    category: ["DevOps", "Cloud"],
  },
  {
    title: "TailwindCSS",
    competency: 4,
    category: ["Web Development", "Frontend"],
  },
  {
    title: "GraphQL",
    competency: 3,
    category: ["Web Development", "API", "Full Stack"],
  },
  {
    title: "CI/CD & GitHub Actions",
    competency: 4,
    category: ["DevOps", "Tools"],
  },
  {
    title: "Redux & State Management",
    competency: 4,
    category: ["Web Development", "Frontend"],
  },
];

const categories = [
  "Web Development",
  "Frontend",
  "Backend",
  "Full Stack",
  "Languages",
  "Cloud",
  "DevOps",
  "Databases",
  "Mobile",
  "API",
  "Data",
  "Tools",
];

const CompetencyBar = ({ level }: { level: number }) => (
  <div className="flex gap-1 w-full">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className={`h-4 flex-1 rounded-sm transition-colors ${
          i <= level ? "bg-primary" : "bg-muted"
        }`}
      />
    ))}
  </div>
);

function SkillsGraph() {
  const [selectedCategory, setSelectedCategory] = React.useState("ALL");
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null);

  const filteredSkills = React.useMemo(() => {
    if (selectedCategory === "ALL") return skills;
    return skills.filter((skill) => skill.category.includes(selectedCategory));
  }, [selectedCategory]);

  const handleCategoryChange = React.useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleMouseEnter = React.useCallback((skillTitle: string) => {
    setHoveredSkill(skillTitle);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setHoveredSkill(null);
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          A breakdown of my technical expertise and competencies
        </p>
        <p className="text-sm text-muted-foreground italic">
          Note: I think these sections are silly, but everyone seems to have
          one. Here is a "mostly" honest overview of my skills.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <button
          key="ALL"
          onClick={() => handleCategoryChange("ALL")}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
            selectedCategory === "ALL"
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          ALL
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <Card className="shadow-md">
        <CardContent className="p-6 md:p-8">
          <div className="grid gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.title}
                className={`grid grid-cols-1 sm:grid-cols-[200px,1fr] lg:grid-cols-[250px,1fr] xl:grid-cols-[300px,1fr] gap-2 sm:gap-8 items-center rounded-lg p-2 ${
                  hoveredSkill === skill.title
                    ? "bg-muted/50"
                    : "hover:bg-muted/30"
                } transition-colors`}
                onMouseEnter={() => handleMouseEnter(skill.title)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="font-medium text-base sm:text-lg break-words pr-4">
                  {skill.title}
                  <div className="flex flex-wrap gap-1 mt-1">
                    {skill.category.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="inline-block text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                      >
                        {cat}
                      </span>
                    ))}
                    {skill.category.length > 2 && (
                      <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        +{skill.category.length - 2}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-grow w-full max-w-[400px]">
                    <CompetencyBar level={skill.competency} />
                  </div>
                  <div className="text-sm font-medium whitespace-nowrap min-w-[40px] text-right">
                    {skill.competency}/5
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export { SkillsGraph };
