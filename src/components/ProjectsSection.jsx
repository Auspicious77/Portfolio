import { Apple, Smartphone, ArrowRight, ExternalLink, Github } from "lucide-react";
import { MdAndroid, MdPhoneAndroid } from "react-icons/md";



const projects = [
  {
    id: 1,
    title: "Honour World Mobile App",
    description: "Instant recharge of Airtime, Data & Bills Payment. Get cash back and discounts on airtime top-up, utility bills and much more!",
    image: "/projects/project4.jpeg",
    tags: ["React-native", "React", "Javascript", "Typescript"],
    demoUrl: "#",
    githubUrl: "#",
    appleUrl: "https://apps.apple.com/ng/app/honour-world-cheaper-data/id6744581013",
    androidUrl: "https://play.google.com/store/apps/details?id=com.ng.honourworld&hl=en",
  },
  {
    id: 2,
    title: "Beentos",
    description:
      " A platform to discover endless possibilities as you co-create with your favourite brands and show case your unique talents",
    image: "/projects/project5.png",
    tags: ["React-native", "React", "Javascript", "Typescript"],
    demoUrl: "#",
    githubUrl: "#",
    appleUrl: "https://apps.apple.com/ng/app/beentos/id6450564973",
    androidUrl: "https://play.google.com/store/apps/details?id=com.beentosapp&hl=en",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    appleUrl: "#",
    androidUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.appleUrl && (
                      <a
                        href={project.appleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Apple size={20} />
                      </a>
                    )}

                    {project.androidUrl && (
                      <a
                        href={project.androidUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <MdAndroid size={25} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

          <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/auspicious77"
          >
           View all <ArrowRight size={16} />
          </a>
        </div>
     

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/auspicious77"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
