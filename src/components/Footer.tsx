import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t-2 border-border bg-background py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
        © 2026 — Built with passion & precision
      </p>
      <div className="flex gap-6">
        <Link to="/contact" className="font-mono text-xs text-muted-foreground uppercase tracking-widest hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">
          Contact
        </Link>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-foreground uppercase tracking-widest hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-foreground uppercase tracking-widest hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
