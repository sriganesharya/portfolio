import { Card } from "@/components/ui/card";
import portfolioData from "@/data/portfolio.json";
import { highlightSkills } from "@/utils/highlightSkills";
import { useLineByLine } from "@/hooks/useLineByLine";

const ExperienceItem = ({ exp }: { exp: any }) => {
  const { displayedLines, elementRef } = useLineByLine(exp.achievements, 150);

  return (
    <div className="relative">
      <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />
      
      <Card className="md:ml-20 p-6 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <h3 className="text-xl font-display font-semibold text-primary">
            {exp.position}
          </h3>
          <span className="text-sm text-muted-foreground font-medium">
            {exp.period}
          </span>
        </div>
        
        <h4 className="text-lg font-medium mb-4 text-foreground/90">
          {exp.company}
        </h4>
        
        <ul ref={elementRef as any} className="space-y-2 text-muted-foreground leading-relaxed">
          {displayedLines.map((achievement, idx) => (
            <li key={idx} className="flex gap-2 animate-fade-in">
              <span className="text-primary mt-1.5 flex-shrink-0">•</span>
              <span>{highlightSkills(achievement)}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-8">
            {experience.map((exp) => (
              <ExperienceItem key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
