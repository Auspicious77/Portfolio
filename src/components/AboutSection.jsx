import { Globe, Server, Smartphone } from "lucide-react";
import { projects } from "@/lib/projectData";

const services = [
  {
    title: "Web Development",
    description:
      "Building fast, responsive web applications and dashboards with React, TypeScript and modern tooling — polished on every screen size.",
    Icon: Globe,
  },
  {
    title: "Mobile Development",
    description:
      "Building sleek, high-performance mobile applications for both Android and iOS using React Native and Flutter — delivering smooth, intuitive user experiences.",
    Icon: Smartphone,
  },
  {
    title: "Backend Development",
    description:
      "Designing and developing scalable backend systems and APIs with Node.js, Express, MongoDB and Firebase — powering robust and secure app infrastructures.",
    Icon: Server,
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: projects.length, label: "Products Shipped" },
  { value: "3", label: "Platforms" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Fullstack Developer
            </h3>

            <p className="text-muted-foreground">
              With over 5 years of hands-on experience, I build products end to
              end — from responsive web apps and cross-platform mobile apps to
              the APIs and databases behind them. I’ve worked across fintech,
              e-commerce, logistics, healthcare, productivity, business, and
              social media, taking products from MVP to fully scaled platforms
              used by thousands of users.
            </p>

            <p className="text-muted-foreground">
              I work with React, React Native, Flutter, JavaScript, TypeScript,
              Dart, Node.js, Express.js, MongoDB, and Firebase, and I’ve shipped
              and maintained products on the web, Google Play Store and Apple
              App Store. Over the years, I’ve collaborated with teams across
              Nigeria and international markets — delivering clean, scalable,
              and user-centric solutions.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-lg p-4 shadow-xs card-hover"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Elisha-Oderinde-CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {services.map(({ title, description, Icon }) => (
              <div key={title} className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
