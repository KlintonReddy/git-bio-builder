import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Zap, Shield, Droplets } from "lucide-react";

const projects = [
  {
    title: "Smart Crop Protection & Irrigation System",
    description: "An innovative IoT-enabled system designed to protect crops from wildlife intrusion and automate irrigation processes. Features motion detection sensors for wildlife deterrent and automated water management.",
    techStack: ["C", "IoT Sensors", "Automation", "Hardware Integration"],
    features: [
      "Motion detection for wildlife protection",
      "Automated irrigation system",
      "Real-time sensor monitoring",
      "Agricultural productivity optimization"
    ],
    icon: Shield,
    category: "IoT & Hardware"
  },
  {
    title: "Machine Learning Models",
    description: "Developed and implemented various ML models during internship at Indo German Institute. Focused on data-driven solutions for real-world applications with hands-on experience in model training and deployment.",
    techStack: ["Python", "Machine Learning", "Data Analysis", "Model Training"],
    features: [
      "Data preprocessing and analysis",
      "Model training and optimization",
      "Real-world application deployment",
      "Performance evaluation and tuning"
    ],
    icon: Zap,
    category: "Machine Learning"
  },
  {
    title: "Web Development Projects",
    description: "Built and deployed modern web applications during Internshala internship. Gained experience in both front-end and back-end development with focus on responsive design and user experience.",
    techStack: ["HTML", "CSS", "JavaScript", "Web Technologies"],
    features: [
      "Responsive web design",
      "Front-end development",
      "Back-end integration",
      "Project deployment"
    ],
    icon: Droplets,
    category: "Web Development"
  }
];

export const ProjectsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and practical implementations across IoT, ML, and web development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="group p-6 hover:scale-105 smooth-transition bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up overflow-hidden relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 smooth-transition" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <IconComponent size={24} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary smooth-transition">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="flex-1 group/btn">
                      <Github size={16} className="group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 group/btn">
                      <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
                      Details
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};