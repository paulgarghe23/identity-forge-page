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
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit honed through continuous learning and practical application
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-lift transition-smooth"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                  <category.icon className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
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
