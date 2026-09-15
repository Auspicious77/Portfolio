import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/lib/projectData";
import { ProjectCard } from "./ProjectCard";

const featuredProjects = projects.filter((project) => project.featured);

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of products I’ve built across web, mobile and backend.
          Each one was carefully crafted with attention to detail,
          performance, and user experience — tap a button to try it live.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 mt-15">
          <Link
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 text-base sm:text-lg"
            to="/projects"
          >
            View all {projects.length} projects <ArrowRight size={16} />
          </Link>

          <a
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-base sm:text-lg"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/auspicious77"
          >
            <Github size={18} /> Check My Github
          </a>
        </div>
      </div>
    </section>
  );
};
