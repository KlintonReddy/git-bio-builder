import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "klintonreddy77@gmail.com",
    href: "mailto:klintonreddy77@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 63020 07230",
    href: "tel:+916302007230"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, Karnataka",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "#",
    color: "primary"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
    color: "accent"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:klintonreddy77@gmail.com",
    color: "primary"
  }
];

const personalDetails = [
  { label: "Full Name", value: "Klinton Reddy Kothakalva" },
  { label: "Date of Birth", value: "01 Jan 2002" },
  { label: "Languages", value: "English, Hindi, Telugu" },
  { label: "Address", value: "402, Sri Sai Maruthi Enclave, 4th B Cross, Sri Venkateshwara Layout, Mahadevpura, Bangalore – 560048" }
];

export const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate and bring innovative ideas to life. Let's connect!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Details */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MessageCircle className="text-primary" size={20} />
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 smooth-transition group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 smooth-transition">
                        <IconComponent size={16} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.label}
                      variant="glassmorphism"
                      size="sm"
                      className="justify-start group"
                      asChild
                    >
                      <a href={social.href}>
                        <IconComponent 
                          size={16} 
                          className={`group-hover:scale-110 smooth-transition ${
                            social.color === 'primary' ? 'text-primary' : 'text-accent'
                          }`} 
                        />
                        {social.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </Card>

            {/* Personal Details */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
              <div className="space-y-3">
                {personalDetails.map((detail) => (
                  <div key={detail.label}>
                    <p className="text-sm text-muted-foreground">{detail.label}</p>
                    <p className="text-sm font-medium">{detail.value}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="Enter your name"
                      className="smooth-transition focus:glow-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="smooth-transition focus:glow-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="What's this about?"
                    className="smooth-transition focus:glow-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    className="smooth-transition focus:glow-primary resize-none"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full group">
                  <Send size={20} className="group-hover:scale-110 smooth-transition" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Availability Status */}
            <div className="mt-6 text-center">
              <Badge variant="secondary" className="px-4 py-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Available for new opportunities
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};