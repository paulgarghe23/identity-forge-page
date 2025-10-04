const Footer = () => {
  return (
    <footer className="py-12 bg-secondary border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-light">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm font-light">
            Built with passion and modern technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
