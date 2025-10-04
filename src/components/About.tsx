import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Lightbulb } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: User,
      title: "Who I Am",
      description: "A dedicated professional with a passion for creating meaningful digital solutions",
    },
    {
      icon: Target,
      title: "What I Do",
      description: "Specializing in crafting user-centric experiences that blend design and functionality",
    },
    {
      icon: Lightbulb,
      title: "My Approach",
      description: "Combining creativity with strategic thinking to deliver impactful results",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and fueled by creativity, I transform ideas into reality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-lift hover:shadow-glow transition-smooth hover:-translate-y-2"
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            With years of experience in the digital landscape, I've had the privilege of working
            on diverse projects that challenge conventional thinking. My journey has been defined
            by continuous learning, collaboration, and a commitment to excellence. I believe in
            the power of technology to solve real-world problems and create positive change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
