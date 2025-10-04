import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:your.email@example.com" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl border border-border bg-card shadow-lift">
            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full gradient-accent text-lg shadow-glow hover:shadow-xl transition-smooth"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-smooth hover:-translate-y-1"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
