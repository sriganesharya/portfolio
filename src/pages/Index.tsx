import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© 2024 Portfolio. Built with React & TypeScript.</p>
      </footer>
    </div>
  );
};

export default Index;
