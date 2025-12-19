import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Code, BarChart3, Database, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import profilePhoto from "@/assets/profile-home.jpg";

const highlights = [
  {
    icon: Briefcase,
    title: "Research Assistant",
    subtitle: "NIU (Sept 2024–Present)",
    color: "bg-sage",
  },
  {
    icon: Code,
    title: "Web Dev Intern",
    subtitle: "Nikhila Constructions",
    color: "bg-blush",
  },
  {
    icon: BarChart3,
    title: "ML & Deep Learning",
    subtitle: "Projects",
    color: "bg-lavender",
  },
  {
    icon: Database,
    title: "Tableau / Power BI",
    subtitle: "SQL & Analytics",
    color: "bg-pale-blue",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center">
        <div className="section-container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-6 opacity-0 animate-fade-up">
                <p className="text-sm uppercase tracking-widest text-primary font-medium">
                  Welcome to my portfolio
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
                  I'm{" "}
                  <span className="text-primary">Sree Harshita</span>{" "}
                  Maddipati
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                  Analytics, ML, and Web Development
                </p>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg opacity-0 animate-fade-up stagger-1">
                Master's student in Operations Management & Information Systems at Northern Illinois University (GPA 3.7). 
                I enjoy turning complex processes into clear, data-driven solutions.
              </p>

              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-2">
                <Button asChild variant="hero" size="lg">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="hero-outline" size="lg">
                  <Link to="/contact">Contact Me</Link>
                </Button>
                <Button asChild variant="subtle" size="lg">
                  <a href="/resume/SreeHarshitaMaddipati_Resume.pdf" download>
                    <Download className="w-4 h-4 mr-1" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-fade-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sage via-lavender to-pale-blue rounded-full blur-3xl opacity-40 scale-110" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Sree Harshita Maddipati"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="section-container">
          <div className="text-center mb-12 opacity-0 animate-fade-up">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
              Quick Highlights
            </p>
            <h2 className="text-2xl md:text-3xl font-display">
              What I bring to the table
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`pastel-card p-6 group cursor-pointer opacity-0 animate-fade-up stagger-${index + 1}`}
              >
                <div
                  className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-6 h-6 text-foreground/70" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 opacity-0 animate-fade-up stagger-5">
            <Button asChild variant="subtle" size="lg">
              <Link to="/about">
                Learn more about me
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
