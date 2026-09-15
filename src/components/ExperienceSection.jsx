import { Calendar, GraduationCap, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Oceansmith Inc",
    location: "United States",
    workType: "Remote",
    period: "Jun 2024 – Dec 2025",
    highlights: [
      "Developed core components for an innovative software solution, ensuring high code quality and system robustness.",
      "Led mandatory code reviews to maintain best practices and mentored junior engineers on technical standards.",
      "Coordinated engineering meetings to align technical strategy, prioritize tasks, and remove blockers.",
      "Collaborated with product managers and engineers in an agile environment to deliver on the product roadmap.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Wasshh Inc",
    location: "Lagos, Nigeria",
    workType: "Remote",
    period: "Jun 2024 – Jun 2025",
    highlights: [
      "Developed a full-stack mobile application using React Native and Node.js, from UI and state management to cloud functions and real-time database operations.",
      "Built and consumed secure RESTful APIs between the mobile client and backend services, with robust error handling and data validation.",
      "Diagnosed and resolved bugs across the entire stack using mobile debugging tools and backend logging.",
    ],
    tags: ["React Native", "Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    role: "Mobile Engineer",
    company: "Cephas ICT Hub",
    location: "Nigeria",
    workType: "Hybrid",
    period: "Aug 2021 – Jul 2025",
    highlights: [
      "Engineered and maintained robust, scalable mobile applications with high performance and a seamless experience across platforms.",
      "Collaborated with designers, product managers, and backend developers to define requirements and ship new features.",
      "Championed code quality with clean, efficient, reusable code that improved maintainability and scalability.",
    ],
  },
  {
    role: "Lead Mobile Engineer",
    company: "CyberOcean",
    location: "Nigeria",
    workType: "Remote",
    period: "Sep 2023 – Feb 2024",
    highlights: [
      "Led the development of a scalable Android and iOS application on a foundation of clean, reusable code.",
      "Improved code quality and team skills through regular code reviews and actionable feedback.",
      "Optimized application performance and troubleshot complex issues for a bug-free user experience.",
    ],
  },
  {
    role: "Tech Support",
    company: "Gaotech Inc",
    location: "USA",
    workType: "Remote",
    period: "Jun 2023 – Sep 2023",
    highlights: [
      "Ensured system reliability by proactively troubleshooting and debugging software issues.",
      "Researched new technologies and software products to inform decisions and improve support protocols.",
      "Prepared detailed documentation on issues, resolutions, and product research.",
    ],
  },
  {
    role: "Mobile Developer",
    company: "Hadegold Media",
    location: "Nigeria",
    workType: "Remote",
    period: "May 2023 – Sep 2023",
    highlights: [
      "Ensured system reliability by proactively troubleshooting and debugging software issues, delivering timely and effective resolutions.",
    ],
  },
];

const education = [
  {
    title: "M.Sc. Information Technology",
    school: "University of Lagos",
    period: "2025 – Present",
  },
  {
    title: "Diploma in Software Engineering",
    school: "AltSchool Africa",
    period: "2023 – 2024",
  },
  {
    title: "B.Tech. Chemical Engineering",
    school: "Ladoke Akintola University of Technology",
    period: "2018 – 2023",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary"> Experience</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Over five years building and leading web, mobile and backend work
          for teams in Nigeria and the United States.
        </p>

        <ol className="relative border-l border-primary/30 ml-2 md:ml-4 space-y-8 text-left">
          {experiences.map((job) => (
            <li key={`${job.company}-${job.role}`} className="relative pl-6 md:pl-10">
              <span className="absolute -left-[9px] top-7 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />

              <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-3.5 w-3.5" />
                    {job.period}
                  </span>
                </div>

                <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-3.5 w-3.5" />
                  {job.location} · {job.workType}
                </p>

                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5 marker:text-primary">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                {job.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        <h3 className="text-2xl font-semibold mt-20 mb-8 text-center">
          Education
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item) => (
            <div key={item.title} className="gradient-border p-6 card-hover">
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.school}</p>
              <p className="text-primary text-sm mt-2">{item.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
