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
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative endeavors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-none shadow-lift hover:shadow-glow transition-smooth hover:-translate-y-2 group"
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-accent transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink size={16} /> View Project
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
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
