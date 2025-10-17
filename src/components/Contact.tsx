import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Github } from "lucide-react";

const Contact = () => {
  const FORM_ENDPOINT = "https://formsubmit.co/paulgarghe23@gmail.com";
  const startedAt = useRef<number>(Date.now()); // para time-check

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/paul-ig/" },
    { icon: Github, label: "GitHub", href: "https://github.com/paulgarghe23" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const honey = (form.querySelector('input[name="_honey"]') as HTMLInputElement)?.value;
    if (honey && honey.trim() !== "") { e.preventDefault(); return; } // bot
    const elapsed = Date.now() - startedAt.current;
    if (elapsed < 3000) { e.preventDefault(); alert("Please wait a moment before submitting."); } // demasiado rápido
  };

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-6 text-foreground">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-10 rounded-lg border border-border/50 bg-card shadow-elegant">
            <form action={FORM_ENDPOINT} method="POST" className="space-y-6" onSubmit={handleSubmit}>
              {/* Campos reales */}
              <Input type="text" name="name" placeholder="Your Name" required className="h-12 bg-background border-border/50" />
              <Input type="email" name="email" placeholder="Your Email" required className="h-12 bg-background border-border/50" />
              <Textarea name="message" placeholder="Your Message" rows={6} required className="resize-none bg-background border-border/50" />

              {/* 🐝 Honeypot (FormSubmit lo soporta con el nombre _honey) */}
              <input
                type="text"
                name="_honey"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                style={{ position: "absolute", left: "-5000px", height: 0, width: 0, opacity: 0 }}
              />

              {/* ⏱️ Timestamp (por si quieres verlo en correos) */}
              <input type="hidden" name="_timestamp" value={String(startedAt.current)} />

              {/* Opcionales FormSubmit */}
              <input type="hidden" name="_captcha" value="false" /> {/* déjalo en false; si hay spam, quítalo para activar el captcha nativo */}
              <input type="hidden" name="_subject" value="New message from paulgarghe.com" />

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium shadow-elegant hover:shadow-lift transition-smooth py-6">
                Send Message
              </Button>
            </form>
          </div>

          <div className="mt-16 flex justify-center gap-5">
            {socialLinks.map((link, i) => (
              <a key={i} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full border border-border/50 bg-card flex items-center justify-center hover:bg-accent/10 hover:text-accent hover:border-accent/50 transition-smooth hover:-translate-y-1">
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
