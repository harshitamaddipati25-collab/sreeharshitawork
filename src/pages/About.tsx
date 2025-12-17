import { Link, useLocation } from "react-router-dom";
import { Linkedin, Mail, ExternalLink } from "lucide-react";
import { Layout } from "@/components/Layout";
import { cn } from "@/lib/utils";
import profilePhoto from "@/assets/profile-photo.jpg";

const sideNavLinks = [
  { name: "About", path: "/about" },
  { name: "Resume", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function About() {
  const location = useLocation();

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12 lg:gap-16">
            {/* Left Sidebar */}
            <aside className="space-y-8">
              {/* Profile Image */}
              <div className="opacity-0 animate-fade-up">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-border shadow-lg">
                  <img
                    src={profilePhoto}
                    alt="Sree Harshita Maddipati"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1 opacity-0 animate-fade-up stagger-1">
                {sideNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "block px-4 py-2 rounded-lg text-sm transition-all duration-200",
                      location.pathname === link.path
                        ? "bg-sage text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Social Links */}
              <div className="flex items-center gap-3 opacity-0 animate-fade-up stagger-2">
                <a
                  href="https://linkedin.com/in/sree-harshita-18678922a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:work.sreeharshita@gmail.com"
                  className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </aside>

            {/* Main Content */}
            <article className="space-y-8 max-w-2xl">
              <header className="opacity-0 animate-fade-up">
                <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
                  About Me
                </p>
                <h1 className="text-3xl md:text-4xl font-display mb-2">
                  Sree Harshita Maddipati
                </h1>
                <p className="text-muted-foreground">
                  Analytics • Machine Learning • Web Development
                </p>
              </header>

              <div className="prose prose-lg max-w-none space-y-6 opacity-0 animate-fade-up stagger-1">
                <p className="text-foreground/90 leading-relaxed">
                  I'm a Master's student in Operations Management & Information Systems at{" "}
                  <span className="font-medium">Northern Illinois University</span>, currently maintaining a 3.7 GPA. 
                  My academic journey combines business acumen with technical expertise, allowing me to approach problems 
                  from multiple angles.
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  What drives me is the challenge of{" "}
                  <span className="font-medium text-primary">
                    turning complex processes into clear, data-driven solutions
                  </span>
                  . Whether it's building predictive models, creating intuitive web applications, or 
                  analyzing healthcare data, I find satisfaction in making information accessible and actionable.
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  Currently, I'm working as a Research Assistant at NIU's College of Health & Human Sciences, 
                  where I conduct surveys, analyze healthcare data using SQL and Power BI, and collaborate 
                  with cross-functional teams to ensure data quality. This role has deepened my understanding 
                  of how data impacts real-world decision-making.
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  I'm building toward a career in tech/data roles where I can combine my analytical skills 
                  with business understanding. I'm particularly interested in opportunities that allow me to 
                  work on machine learning applications, data analytics, or product-facing technology.
                </p>

                <div className="pt-4">
                  <p className="text-muted-foreground text-sm italic">
                    Outside of work and study, I enjoy exploring new technologies, contributing to projects 
                    that have real-world impact, and continuously learning through online courses and 
                    collaborative projects.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8 flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View my projects
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Get in touch
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
}
