/* eslint-disable react/prop-types */
import { Github, Globe } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

// Labelled buttons so visitors know exactly where each link takes them.
const linkTypes = [
  { key: "webUrl", label: "Website", Icon: Globe },
  { key: "appleUrl", label: "App Store", Icon: FaApple },
  { key: "androidUrl", label: "Google Play", Icon: FaGooglePlay },
  { key: "githubUrl", label: "Source Code", Icon: Github },
];

export const ProjectCard = ({ project }) => {
  const links = linkTypes.filter(({ key }) => project[key]);

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-6">
          {project.description}
        </p>

        {links.length > 0 && (
          <div className="mt-auto pt-4 border-t border-border flex flex-wrap justify-center gap-2">
            {links.map(({ key, label, Icon }) => (
              <a
                key={key}
                href={project[key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} on ${label}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/5 text-sm font-medium text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
