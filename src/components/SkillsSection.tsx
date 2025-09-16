import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Users, Brain, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C", "SQL (Basics)"],
    color: "primary"
  },
  {
    title: "Technologies & Tools",
    icon: Wrench,
    skills: ["Git/GitHub", "VS Code", "Linux (Basics)", "IoT Sensors", "Automation Tools"],
    color: "accent"
  },
  {
    title: "Concepts & Frameworks",
    icon: Brain,
    skills: ["Data Structures", "Machine Learning", "IoT Systems", "DevOps Basics", "Web Development"],
    color: "primary"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "Database Design", "Data Management"],
    color: "accent"
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Critical Thinking", "Problem-Solving", "Team Collaboration", "Adaptability"],
    color: "primary"
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Version Management", "Collaborative Development"],
    color: "accent"
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-20 bg-card/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and core competencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="p-6 hover:scale-105 smooth-transition bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary" 
                      className="mr-2 mb-2 hover:scale-105 smooth-transition"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};