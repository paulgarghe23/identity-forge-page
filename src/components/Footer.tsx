const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with passion and modern technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
