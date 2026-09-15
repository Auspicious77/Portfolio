import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
import { platformFilters, projects } from "../lib/projectData";
import { cn } from "@/lib/utils";

const matchesFilter = (project, filterId) =>
  filterId === "all" || Boolean(project[filterId]);

export const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects.filter((project) =>
    matchesFilter(project, activeFilter)
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      <Link
        to="/"
        className="fixed top-3 left-3 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md shadow-xs text-foreground/80 hover:text-primary transition-colors duration-300"
      >
        <ArrowLeft size={16} /> Home
      </Link>

      {/* Main Content */}
      <main>
        <section id="all-projects" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              All <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Explore my full collection of web, mobile and backend work —
              each crafted with performance, user experience, and modern tools
              in mind. Filter by platform to find something to try.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {platformFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "px-5 py-2 rounded-full transition-colors duration-300",
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/70 text-foreground hover:bg-secondary"
                  )}
                >
                  {filter.label}
                  <span className="ml-2 text-xs opacity-70">
                    {projects.filter((p) => matchesFilter(p, filter.id)).length}
                  </span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* Back to homepage */}
            <div className="text-center mt-12">
              <Link
                to="/"
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
              >
                <ArrowLeft size={16} /> Back Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
