import { Layout } from "@/components/Layout";
import { Code, Brain, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    color: "bg-sage",
    skills: [
      "React",
      "Angular",
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "R",
      "SQL",
      "AWS",
      "Pandas",
      "Keras",
      "Tableau",
      "Power BI",
    ],
  },
  {
    title: "Concepts & Methods",
    icon: Brain,
    color: "bg-lavender",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "AI Integration",
      "Data Analytics",
      "Cloud Solutions",
      "Data Visualization",
      "Database Management",
      "Predictive Modeling",
      "XGBoost",
      "Random Forest",
      "Neural Networks",
      "ETL Pipelines",
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "bg-blush",
    skills: [
      "Communication",
      "Leadership",
      "Problem Solving",
      "Digital Marketing",
      "Time Management",
      "Presentation Skills",
      "Team Collaboration",
      "Critical Thinking",
    ],
  },
];

export default function Skills() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="section-container">
          {/* Header */}
          <header className="max-w-2xl mb-16 opacity-0 animate-fade-up">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
              Skills
            </p>
            <h1 className="text-3xl md:text-4xl font-display mb-4">
              Tools & Expertise
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              A comprehensive toolkit spanning technical skills, analytical methods, and interpersonal abilities.
            </p>
          </header>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`pastel-card p-6 md:p-8 opacity-0 animate-fade-up stagger-${index + 1}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-foreground/70" />
                  </div>
                  <h2 className="font-display text-lg font-semibold">
                    {category.title}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`pastel-tag ${
                        category.color === "bg-sage"
                          ? "tag-sage"
                          : category.color === "bg-lavender"
                          ? "tag-lavender"
                          : "tag-blush"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center opacity-0 animate-fade-up stagger-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Always learning and expanding my toolkit
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
