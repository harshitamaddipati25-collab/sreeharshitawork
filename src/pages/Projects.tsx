import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ArrowRight, X, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  summary: string;
  techStack: string[];
  color: string;
  overview: string;
  problem: string;
  approach: string;
  results: string[];
  learnings: string;
}

const projects: Project[] = [
  {
    id: "credit-risk",
    title: "Credit Risk Prediction",
    subtitle: "ML & Deep Learning",
    period: "Nov 2025 – Dec 2025",
    summary: "Engineered a synthetic credit-risk target for supervised learning with 99.5% accuracy.",
    techStack: ["Python", "Logistic Regression", "Random Forest", "XGBoost", "Neural Networks"],
    color: "bg-sage",
    overview: "A comprehensive machine learning project focused on predicting credit risk using various supervised learning algorithms on banking data.",
    problem: "Traditional credit risk assessment relies heavily on manual processes and limited feature sets. The challenge was to build automated models that could accurately predict default risk on unlabeled banking data.",
    approach: "Engineered a realistic synthetic credit-risk target for supervised learning on unlabeled data with banking-like constraints. Built and compared multiple models including Logistic Regression, Random Forest, XGBoost, and Neural Networks.",
    results: [
      "Achieved 99.5% classification accuracy across test data",
      "Delivered actionable lending insights to support smarter approvals",
      "Reduced default exposure through predictive analytics",
      "Created comparative analysis of model performance metrics",
    ],
    learnings: "This project deepened my understanding of feature engineering for financial data and the importance of model interpretability in high-stakes decision making.",
  },
  {
    id: "alzheimers",
    title: "Alzheimer's Disease Detection",
    subtitle: "Deep Learning & Medical Imaging",
    period: "Nov 2023 – Jun 2024",
    summary: "CNN/D-CNN models for early-stage Alzheimer's classification using MRI images with ~97% accuracy.",
    techStack: ["Python", "CNN", "D-CNN", "Medical Image Analysis", "ETL Pipelines"],
    color: "bg-lavender",
    overview: "A deep learning research project focused on early detection of Alzheimer's disease through MRI hippocampus image analysis.",
    problem: "Early detection of Alzheimer's disease is crucial for treatment planning, but manual analysis of MRI scans is time-consuming and subjective. Automated classification systems can provide consistent, rapid screening.",
    approach: "Designed and implemented Convolutional Neural Network (CNN) and Deep CNN (D-CNN) models. Performed extensive medical image preprocessing including normalization, resizing, noise reduction, and data augmentation.",
    results: [
      "Achieved approximately 97% classification accuracy",
      "Successfully published research under Dr. Mohana Roopa",
      "Validated model effectiveness for early-stage classification",
      "Developed automated ETL pipelines for reproducible workflows",
    ],
    learnings: "Working on healthcare AI taught me the critical importance of data preprocessing in medical imaging and the ethical considerations in deploying ML models for clinical use.",
  },
  {
    id: "art-voyage",
    title: "Art Voyage",
    subtitle: "Web Application",
    period: "Apr 2022 – Jun 2022",
    summary: "A responsive Angular application for interactive artwork exploration using the Chicago Artworks API.",
    techStack: ["Angular", "TypeScript", "REST APIs", "Responsive Design"],
    color: "bg-blush",
    overview: "A modern web application enabling users to explore and discover artworks from the Chicago Art Institute's extensive collection.",
    problem: "Art enthusiasts often struggle to navigate large museum collections online. The goal was to create an intuitive, visually engaging interface for artwork discovery.",
    approach: "Built a responsive Angular application with client-side routing and modular components. Integrated real-time REST APIs to fetch and display data from the Chicago Artworks API.",
    results: [
      "Created interactive UI components for dynamic artwork exploration",
      "Implemented efficient data fetching and caching strategies",
      "Applied clean frontend architecture for smooth user experience",
      "Delivered fully responsive design for all device sizes",
    ],
    learnings: "This project strengthened my understanding of modern frontend frameworks, API integration patterns, and the importance of performance optimization in data-heavy applications.",
  },
  {
    id: "healthx",
    title: "Healthx",
    subtitle: "Desktop Health Application",
    period: "Dec 2021 – Mar 2022",
    summary: "A Python-based desktop health application integrating BMI calculator, food analysis, and medicine recommendations.",
    techStack: ["Python", "Tkinter", "Desktop Application", "UI/UX Design"],
    color: "bg-pale-blue",
    overview: "A comprehensive health utility application combining multiple health-related features into a single, user-friendly desktop interface.",
    problem: "Users often need to use multiple apps for different health-related tasks. A unified application could streamline health monitoring and provide a better user experience.",
    approach: "Designed and developed using Python and Tkinter, implementing modular, reusable code. Focused on intuitive UI/UX design ensuring smooth navigation across all features.",
    results: [
      "Implemented BMI calculator with real-time health classification",
      "Built food analysis module for dietary choice evaluation",
      "Developed medicine recommendation feature based on health parameters",
      "Consolidated multiple health functions into a lightweight tool",
    ],
    learnings: "Building a desktop application taught me the value of modular architecture and user-centric design, especially when combining multiple features into a cohesive product.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="section-container">
          {/* Header */}
          <header className="max-w-2xl mb-16 opacity-0 animate-fade-up">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
              Projects
            </p>
            <h1 className="text-3xl md:text-4xl font-display mb-4">
              Featured Work
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              A collection of projects showcasing my skills in machine learning, web development, and data analytics.
            </p>
          </header>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`pastel-card p-6 md:p-8 group cursor-pointer opacity-0 animate-fade-up stagger-${index + 1}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-lg font-display font-semibold text-foreground/70">
                    {project.title.charAt(0)}
                  </span>
                </div>

                <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">
                  {project.subtitle}
                </p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className={`pastel-tag ${project.color === "bg-sage" ? "tag-sage" : project.color === "bg-blush" ? "tag-blush" : project.color === "bg-lavender" ? "tag-lavender" : "tag-pale-blue"}`}>
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="pastel-tag bg-muted text-muted-foreground">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.period}
                  </span>
                  <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read case study
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-background rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-background border-b border-border p-6 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 ${selectedProject.color} rounded-xl flex items-center justify-center`}>
                    <span className="text-base font-display font-semibold text-foreground/70">
                      {selectedProject.title.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold">
                      {selectedProject.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject.subtitle} • {selectedProject.period}
                    </p>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedProject(null)}
                className="shrink-0"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className={`pastel-tag ${selectedProject.color === "bg-sage" ? "tag-sage" : selectedProject.color === "bg-blush" ? "tag-blush" : selectedProject.color === "bg-lavender" ? "tag-lavender" : "tag-pale-blue"}`}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Overview */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.overview}
                </p>
              </div>

              {/* Problem */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Problem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Approach */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.approach}
                </p>
              </div>

              {/* Results */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Results</h3>
                <ul className="space-y-2">
                  {selectedProject.results.map((result, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learnings */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Key Learnings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.learnings}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
