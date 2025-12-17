import { Layout } from "@/components/Layout";
import { MapPin, Calendar, Building } from "lucide-react";

const experiences = [
  {
    title: "Research Assistant",
    company: "Northern Illinois University",
    department: "College of Health & Human Sciences, Survey Research Lab",
    location: "DeKalb, IL",
    period: "Sept 2024 – Present",
    responsibilities: [
      "Conducted surveys and interviews for health and human sciences research projects",
      "Ensured data quality through collaboration with cross-functional teams",
      "Supported data entry, cleaning, and analysis processes",
      "Analyzed healthcare and survey data using SQL and Power BI to generate actionable insights",
    ],
    skills: ["SQL", "Power BI", "Data Analysis", "Research", "Data Quality"],
    color: "bg-sage",
  },
  {
    title: "Web Developer Intern",
    company: "Nikhila Constructions Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "Nov 2022 – Jan 2023",
    responsibilities: [
      "Built a dynamic corporate website using HTML/CSS/JavaScript, increasing average session duration by 40%",
      "Integrated an AI chatbot automating ~60% of user queries, improving customer satisfaction by 35%",
      "Proposed scalable AI features to enhance functionality and user experience",
    ],
    skills: ["HTML/CSS", "JavaScript", "AI Chatbot", "UX Design", "Web Development"],
    color: "bg-blush",
  },
];

const education = {
  degree: "Master of Science in Operations Management & Information Systems",
  school: "Northern Illinois University",
  location: "DeKalb, IL",
  period: "Aug 2024 – Present",
  gpa: "3.7 GPA",
};

export default function Experience() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="section-container">
          {/* Header */}
          <header className="max-w-2xl mb-16 opacity-0 animate-fade-up">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
              Experience
            </p>
            <h1 className="text-3xl md:text-4xl font-display mb-4">
              My Professional Journey
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              A blend of research, development, and data analytics experience that shapes my approach to solving problems.
            </p>
          </header>

          {/* Education */}
          <div className="mb-16 opacity-0 animate-fade-up stagger-1">
            <h2 className="text-xl font-display mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-lavender rounded-lg flex items-center justify-center">
                <Building className="w-4 h-4 text-foreground/70" />
              </div>
              Education
            </h2>
            <div className="pastel-card p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {education.degree}
                  </h3>
                  <p className="text-primary font-medium">{education.school}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {education.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {education.period}
                    </span>
                  </div>
                </div>
                <span className="pastel-tag tag-sage font-semibold">
                  {education.gpa}
                </span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="opacity-0 animate-fade-up stagger-2">
            <h2 className="text-xl font-display mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-pale-blue rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-foreground/70" />
              </div>
              Work Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="pastel-card p-6 md:p-8 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Timeline indicator */}
                    <div className="hidden lg:flex flex-col items-center gap-2">
                      <div className={`w-4 h-4 rounded-full ${exp.color}`} />
                      {index < experiences.length - 1 && (
                        <div className="w-px h-full bg-border min-h-[100px]" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          {exp.department && (
                            <p className="text-sm text-muted-foreground">
                              {exp.department}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`pastel-tag ${
                              index === 0 ? "tag-sage" : "tag-blush"
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
