import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, MapPin, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import profileAvatar from "@/assets/profile-avatar.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Profile Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profileAvatar}
                alt="Klinton Reddy K"
                className="w-32 h-32 rounded-full border-4 border-primary glow-primary animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl" />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Klinton Reddy K</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Software Developer & Engineer
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            B.Tech ECE graduate passionate about building innovative solutions with 
            <span className="text-primary font-semibold"> Python</span>, 
            <span className="text-accent font-semibold"> IoT</span>, and 
            <span className="text-primary font-semibold"> Machine Learning</span>. 
            Ready to contribute technical expertise to dynamic teams.
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Python", "Java", "C", "IoT", "Machine Learning", "DevOps", "Git"].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm font-medium">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>Bangalore, KA</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span>+91 63020 07230</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <span>klintonreddy77@gmail.com</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" className="group">
              <Download size={20} className="group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
            <Button variant="glassmorphism" size="lg" className="group">
              <Github size={20} className="group-hover:scale-110 transition-transform" />
              View GitHub
            </Button>
            <Button variant="glassmorphism" size="lg" className="group">
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button variant="glassmorphism" size="lg" className="group">
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};