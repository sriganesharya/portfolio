import { Card } from "@/components/ui/card";
import portfolioData from "@/data/portfolio.json";
import { getSkillIcon } from "@/utils/skillIcons";
import profilePhoto from "@/assets/profile-photo.jpg";

export const About = () => {
  const { personal, skills } = portfolioData;

  const renderSkillWithIcon = (skill: string) => {
    const iconUrl = getSkillIcon(skill);
    return (
      <span
        key={skill}
        className="px-3 py-2 bg-secondary border-2 border-primary/30 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-secondary/80 hover:border-primary/50 transition-all"
      >
        {iconUrl && (
          <img 
            src={iconUrl} 
            alt={`${skill} icon`}
            className="w-4 h-4 brightness-0 invert"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        {skill}
      </span>
    );
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-primary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <picture>
              <img
                src={profilePhoto}
                alt={`${personal.name} profile photo`}
                className="relative w-48 h-48 rounded-full object-cover border-4 border-card shadow-glow"
                width={192}
                height={192}
                loading="eager"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            </picture>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-display font-semibold mb-4 text-primary">Background</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {personal.bio}
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
              <div className="text-center p-4 bg-secondary/50 rounded-lg border border-primary/20 hover:border-primary/40 transition-all">
                <div className="text-3xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              
              <div className="text-center p-4 bg-secondary/50 rounded-lg border border-primary/20 hover:border-primary/40 transition-all">
                <div className="text-3xl font-bold text-primary mb-1">
                  {Object.values(skills).flat().length}
                </div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              
              <div className="text-center p-4 bg-secondary/50 rounded-lg border border-primary/20 hover:border-primary/40 transition-all">
                <div className="text-3xl font-bold text-primary mb-1">
                  {portfolioData.projects.length}
                </div>
                <div className="text-sm text-muted-foreground">Personal Projects</div>
              </div>
              
              <div className="text-center p-4 bg-secondary/50 rounded-lg border border-primary/20 hover:border-primary/40 transition-all">
                <div className="text-3xl font-bold text-primary mb-1">
                  {portfolioData.certificates.length}
                </div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
            <h3 className="text-2xl font-display font-semibold mb-6 text-primary">Skills</h3>
            
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-3">
                <h4 className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map(renderSkillWithIcon)}
                </div>
              </div>
              
              <div className="border border-border rounded-lg p-3">
                <h4 className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map(renderSkillWithIcon)}
                </div>
              </div>
              
              <div className="border border-border rounded-lg p-3">
                <h4 className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map(renderSkillWithIcon)}
                </div>
              </div>
              
              <div className="border border-border rounded-lg p-3">
                <h4 className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">Databases</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map(renderSkillWithIcon)}
                </div>
              </div>
              
              <div className="border border-border rounded-lg p-3">
                <h4 className="text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wide">Cloud & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {[...skills.cloud, ...skills.tools].map(renderSkillWithIcon)}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
