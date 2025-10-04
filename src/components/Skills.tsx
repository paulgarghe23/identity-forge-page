import { Badge } from "@/components/ui/badge";
import { Code, Palette, Workflow, Database, Cloud, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Development",
      skills: ["React", "TypeScript", "Node.js", "Python", "Next.js"],
    },
    {
      icon: Palette,
      title: "Design",
      skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Responsive Design"],
    },
    {
      icon: Workflow,
      title: "Tools & Workflow",
      skills: ["Git", "Agile", "CI/CD", "Testing", "Documentation"],
    },
    {
      icon: Database,
      title: "Backend & Data",
      skills: ["PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Serverless"],
    },
    {
      icon: Zap,
      title: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Leadership", "Creativity"],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A diverse toolkit honed through continuous learning and practical application
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-border/50 bg-card hover:shadow-elegant transition-smooth"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <category.icon className="text-primary-foreground" size={20} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm font-normal hover:bg-accent/10 hover:text-foreground transition-smooth cursor-default border border-border/50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
