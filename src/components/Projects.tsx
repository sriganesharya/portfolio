import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import { highlightSkills } from "@/utils/highlightSkills";
import { useWordByWord } from "@/hooks/useWordByWord";

const ProjectCard = ({ project }: { project: any }) => {
  const { displayedText, elementRef } = useWordByWord(project.description, 30);

  return (
    <Card className="p-6 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
      <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p ref={elementRef as any} className="text-muted-foreground mb-4 leading-relaxed min-h-[60px]">
        {highlightSkills(displayedText)}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1 bg-secondary/50 rounded-md text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        <Button
          size="sm"
          variant="secondary"
          className="hover:bg-primary hover:text-primary-foreground transition-colors"
          asChild
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </a>
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="hover:bg-primary hover:text-primary-foreground transition-colors"
          asChild
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
      </div>
    </Card>
  );
};

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
