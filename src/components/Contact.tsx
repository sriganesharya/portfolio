import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        <Card className="p-8 md:p-12 bg-card border-border shadow-card text-center">
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center gap-2 text-foreground/90">
              <Mail className="h-5 w-5 text-primary" />
              <span>{personal.email}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/90">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{personal.location}</span>
            </div>
          </div>
          
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
            asChild
          >
            <a href={`mailto:${personal.email}`}>
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </a>
          </Button>
        </Card>
      </div>
    </section>
  );
};
