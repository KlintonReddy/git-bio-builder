import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Klinton Reddy K</h3>
            <p className="text-muted-foreground mb-4">
              Software Developer passionate about creating innovative solutions
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              <Button variant="ghost" size="sm" className="p-2">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Mail size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary smooth-transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Bangalore, Karnataka</p>
              <p>+91 63020 07230</p>
              <p>klintonreddy77@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500 animate-pulse" /> by Klinton Reddy K
          </p>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};