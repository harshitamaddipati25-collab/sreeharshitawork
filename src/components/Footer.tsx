import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";

const quickLinks = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-medium">Sree Harshita Maddipati</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Analytics, ML, and Web Development. Turning complex processes into clear, data-driven solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:work.sreeharshita@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                work.sreeharshita@gmail.com
              </a>
              <a
                href="tel:+12242307127"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (224) 230 7127
              </a>
              <a
                href="https://linkedin.com/in/sree-harshita-18678922a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col items-center justify-center gap-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sree Harshita Maddipati. Built with ❤️ and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}
