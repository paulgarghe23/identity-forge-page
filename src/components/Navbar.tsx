import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [{ label: "Projects", href: "/projects" }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      aria-label="Primary"
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Go home">
            {/* Logo con planta más grande (menos espacio blanco) */}
            <div
              className="w-11 h-11 rounded-lg border-2 border-primary overflow-hidden group-hover:border-accent transition-smooth bg-no-repeat bg-cover"
              style={{
                backgroundImage: 'url("/gold-growing-plant.png")',
                backgroundPosition: "center 50%", // centrado verticalmente
              }}
              aria-label="Golden plant logo"
            />
            <span className="text-lg font-serif font-semibold text-foreground hidden sm:block">
              Paul Garghe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-smooth font-medium tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-block">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant">
                Contact
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-smooth font-medium py-2 tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="w-full inline-block">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant w-full mt-2">
                Contact
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
