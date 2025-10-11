import { Card } from "@/components/ui/card";
import portfolioData from "@/data/portfolio.json";

export const About = () => {
  const { personal, skills } = portfolioData;

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-display font-semibold mb-4 text-primary">Background</h3>
            <p className="text-muted-foreground leading-relaxed">
              {personal.bio}
            </p>
          </Card>
          
          <Card className="p-8 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-display font-semibold mb-6 text-primary">Skills</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">Databases</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">Cloud & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {[...skills.cloud, ...skills.tools].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
