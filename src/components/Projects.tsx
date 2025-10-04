import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory and payment processing",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard for business intelligence",
      tags: ["TypeScript", "D3.js", "PostgreSQL", "AWS"],
      link: "#",
      github: "#",
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application for productivity and task management",
      tags: ["React Native", "Firebase", "Redux"],
      link: "#",
      github: "#",
    },
    {
      title: "AI-Powered Tool",
      description: "Machine learning application for automated content generation",
      tags: ["Python", "TensorFlow", "FastAPI"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-32 bg-secondary">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work and creative endeavors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border border-border/50 shadow-elegant hover:shadow-lift transition-smooth hover:-translate-y-1 group bg-card"
            >
              <CardHeader className="pb-4 pt-8 px-8">
                <CardTitle className="text-2xl font-serif font-semibold group-hover:text-accent transition-smooth mb-3">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2 hover:bg-accent/10">
                    <ExternalLink size={16} /> View Project
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 hover:bg-accent/10">
                    <Github size={16} /> Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
