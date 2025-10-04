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
    <section id="about" className="py-32 bg-secondary">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Driven by curiosity and fueled by creativity, I transform ideas into reality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-border/50 shadow-elegant hover:shadow-lift transition-smooth hover:-translate-y-1 bg-card"
            >
              <CardContent className="pt-8 pb-8 px-6">
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-5">
                  <feature.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-loose">
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
