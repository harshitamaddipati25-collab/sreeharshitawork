import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { BarChart3, Brain, Code, FileSearch, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BarChart3,
    title: "Data Analytics & Dashboards",
    description:
      "Transform raw data into actionable insights through interactive dashboards and comprehensive analysis. I help organizations make data-driven decisions with clarity.",
    tools: ["SQL", "Power BI", "Tableau", "Python", "Excel"],
    color: "bg-sage",
  },
  {
    icon: Brain,
    title: "Machine Learning & Predictive Modeling",
    description:
      "Build and deploy predictive models that uncover patterns and forecast outcomes. From classification to regression, I develop solutions tailored to your needs.",
    tools: ["XGBoost", "Random Forest", "Neural Networks", "Scikit-learn", "Keras"],
    color: "bg-lavender",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Create modern, responsive web applications with clean architecture and intuitive user experiences. I focus on building scalable solutions with best practices.",
    tools: ["React", "Angular", "TypeScript", "REST APIs", "Responsive Design"],
    color: "bg-blush",
  },
  {
    icon: FileSearch,
    title: "Research Data Support",
    description:
      "Support research projects with data collection, cleaning, and analysis. I ensure data quality and help extract meaningful insights from survey and healthcare data.",
    tools: ["Survey Analysis", "Data Cleaning", "Statistical Analysis", "Reporting"],
    color: "bg-pale-blue",
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="section-container">
          {/* Header */}
          <header className="max-w-2xl mb-16 opacity-0 animate-fade-up">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
              Services
            </p>
            <h1 className="text-3xl md:text-4xl font-display mb-4">
              What I Can Help With
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Combining analytical expertise with technical skills to deliver solutions that make a difference.
            </p>
          </header>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`pastel-card p-6 md:p-8 group opacity-0 animate-fade-up stagger-${index + 1}`}
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-foreground/70" />
                </div>

                <h3 className="font-semibold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`pastel-tag ${
                        service.color === "bg-sage"
                          ? "tag-sage"
                          : service.color === "bg-lavender"
                          ? "tag-lavender"
                          : service.color === "bg-blush"
                          ? "tag-blush"
                          : "tag-pale-blue"
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center opacity-0 animate-fade-up stagger-5">
            <p className="text-muted-foreground mb-6">
              Interested in working together? Let's discuss your project.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
