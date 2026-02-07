import { Link, useLocation } from "react-router-dom";
import { Linkedin, Mail, ExternalLink } from "lucide-react";
import { Layout } from "@/components/Layout";
import { cn } from "@/lib/utils";
import profilePhoto from "@/assets/profile-about.jpg";
import foodPhoto from "@/assets/food-hobby.jpeg";
import paintPhoto from "@/assets/paint-hobby.jpeg";
import gymPhoto from "@/assets/gym-hobby.jpeg";
import ramenPhoto from "@/assets/ramen-hobby.jpeg";

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
                  href="https://www.linkedin.com/in/sree-harshita-maddipati-18678922a/"
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
                  I am a Master's student in Operations Management & Information Systems at{" "}
                  <span className="font-medium">Northern Illinois University</span> (GPA: 3.7/4.0), 
                  where I bridge the gap between complex business logic and technical execution. 
                  I don't just look at data; I look for the story it's trying to tell.
                </p>

                <div className="space-y-4">
                  <h2 className="text-xl font-display text-foreground">What Drives Me</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    I thrive on the challenge of transforming messy, complex processes into streamlined, 
                    data-driven solutions. Whether I'm architecting predictive models, building intuitive 
                    web applications, or diving deep into healthcare analytics, my goal is always the same: 
                    making information accessible, actionable, and impactful.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-display text-foreground">Current Impact</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    As a Research Assistant at NIU's College of Health & Human Sciences, I act as the 
                    data backbone for our team. I conduct targeted surveys and leverage SQL and Tableau 
                    to turn healthcare data into visual narratives. Collaborating across departments, 
                    I ensure our data quality is pristine, helping translate raw numbers into real-world 
                    decisions that affect human lives.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-display text-foreground">The Goal</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    I am building a career at the intersection of tech and strategy—specifically in 
                    Machine Learning, Data Analytics, or Product-focused roles. I'm looking for a team 
                    that values a mix of analytical rigor and creative problem-solving.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-display text-foreground">Beyond the Screen</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    When I'm not working with data or debugging code, I'm usually staying active or 
                    exploring my creative side. You'll likely find me:
                  </p>
                  <ul className="space-y-3 text-foreground/90">
                    <li>
                      <span className="font-medium text-primary">On the Court:</span> I'm a huge basketball 
                      fan and player. I've picked up quite a few achievements over the years; that competitive 
                      drive definitely carries over into my professional work.
                    </li>
                    <li>
                      <span className="font-medium text-primary">Chasing Flavors:</span> I'm a total foodie. 
                      I love exploring new cuisines and finding the best hidden gems in the city.
                    </li>
                    <li>
                      <span className="font-medium text-primary">At the Gym:</span> Keeping a disciplined 
                      routine at the gym helps me stay sharp and energized for my technical projects.
                    </li>
                    <li>
                      <span className="font-medium text-primary">Creative Expression:</span> I have a deep 
                      passion for fashion and painting. I love experimenting with styles and colors, finding 
                      that the same eye for detail I use in art helps me design better user interfaces and 
                      data visualizations.
                    </li>
                  </ul>
                  
                  {/* Collage-style image gallery */}
                  <div className="relative h-[400px] md:h-[450px] mt-8">
                    <div className="absolute left-0 top-0 w-36 md:w-44 rounded-xl overflow-hidden shadow-lg rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-300 z-10">
                      <img src={foodPhoto} alt="Foodie adventures" className="w-full h-auto" />
                    </div>
                    <div className="absolute left-28 md:left-36 top-12 w-40 md:w-48 rounded-xl overflow-hidden shadow-lg rotate-[2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 z-20">
                      <img src={paintPhoto} alt="Painting and creative expression" className="w-full h-auto" />
                    </div>
                    <div className="absolute right-16 md:right-24 top-0 w-36 md:w-44 rounded-xl overflow-hidden shadow-lg rotate-[4deg] hover:rotate-0 hover:scale-105 transition-all duration-300 z-10">
                      <img src={gymPhoto} alt="At the gym" className="w-full h-auto" />
                    </div>
                    <div className="absolute right-0 top-20 w-32 md:w-40 rounded-xl overflow-hidden shadow-lg rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 z-30">
                      <img src={ramenPhoto} alt="Ramen adventures" className="w-full h-auto" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-l-2 border-primary/30 pl-4">
                  <p className="text-muted-foreground italic">
                    "When I'm not at my desk, you'll probably find me at gym, hitting a three-pointer 
                    or hunting for the best ramen in town."
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
