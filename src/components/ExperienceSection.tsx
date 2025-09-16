import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "internship",
    title: "Machine Learning Intern",
    company: "Indo German Institute of Advanced Technology",
    period: "May 2024 – Jul 2024",
    location: "Remote",
    description: "Gained hands-on experience in building ML models and implementing data-driven solutions for real-world applications.",
    skills: ["Machine Learning", "Python", "Data Analysis", "Model Development"],
    icon: Building
  },
  {
    type: "internship",
    title: "Web Development Intern",
    company: "Internshala",
    period: "Jul 2023 – Sep 2023",
    location: "Virtual",
    description: "Completed a virtual training and project-based internship in web development. Developed and deployed web applications using front-end and back-end technologies.",
    skills: ["Web Development", "Frontend", "Backend", "Project Management"],
    icon: Building
  }
];

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Electronics & Communication Engineering",
    institution: "Sri Venkateshwara College of Engineering & Technology",
    location: "Chittoor",
    period: "2020 – 2024",
    grade: "61%",
    icon: GraduationCap
  },
  {
    degree: "Intermediate (CBSE – Class XII)",
    field: "Science",
    institution: "Penchal Reddy CBSE High School",
    location: "Rayachoty",
    period: "2019",
    grade: "83.2%",
    icon: GraduationCap
  },
  {
    degree: "SSC (Class X)",
    field: "General",
    institution: "VR High School",
    location: "Rayachoty",
    period: "2017",
    grade: "10/10 GPA",
    icon: GraduationCap
  }
];

const certifications = [
  {
    title: "PCB Design Workshop",
    description: "Comprehensive hands-on training in PCB design and simulation",
    skills: ["Circuit Design", "PCB Layout", "Hardware Integration", "Testing & Troubleshooting"],
    icon: Award
  }
];

export const ExperienceSection = () => {
  return (
    <section className="py-20 bg-card/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and academic background
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Building className="text-primary" size={24} />
              Professional Experience
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <Card 
                    key={exp.title}
                    className="p-6 hover:scale-105 smooth-transition bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <IconComponent size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-semibold">{exp.title}</h4>
                          <Badge variant="secondary">{exp.type}</Badge>
                        </div>
                        <p className="text-primary font-medium mb-1">{exp.company}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="text-accent" size={24} />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <Card 
                    key={edu.degree}
                    className="p-6 hover:scale-105 smooth-transition bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent">
                        <IconComponent size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-semibold">{edu.degree}</h4>
                            {edu.field !== "General" && (
                              <p className="text-accent font-medium">{edu.field}</p>
                            )}
                          </div>
                          <Badge variant="secondary">{edu.grade}</Badge>
                        </div>
                        <p className="text-foreground font-medium mb-1">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-primary" size={24} />
              Certifications & Training
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <Card 
                    key={cert.title}
                    className="p-6 hover:scale-105 smooth-transition bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <IconComponent size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {cert.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};