import { cn } from "@/lib/utils";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the section currently in the middle of the screen
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // While the mobile menu is open: lock page scroll, close on Escape or desktop resize
  useEffect(() => {
    if (!isMenuOpen) return;

    const root = document.documentElement;
    root.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 py-3 transition-all duration-300",
          isScrolled && !isMenuOpen
            ? "bg-background/80 backdrop-blur-md shadow-xs"
            : "md:py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
            onClick={closeMenu}
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Elisha</span> Oderinde
            </span>
          </a>

          {/* desktop nav — right margin keeps links clear of the fixed theme toggle */}
          <div className="hidden md:flex space-x-8 mr-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors duration-300 hover:text-primary",
                  activeSection === item.href
                    ? "text-primary"
                    : "text-foreground/80"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={cn(
              "md:hidden p-2 mr-4 rounded-full text-foreground transition-colors duration-300",
              isMenuOpen ? "bg-primary/15 text-primary" : "hover:bg-primary/10"
            )}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu lives outside <nav>: the nav's backdrop blur would otherwise
          trap this fixed overlay inside the nav bar once the page is scrolled. */}
      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        className={cn(
          "fixed inset-0 z-30 md:hidden bg-background/95 backdrop-blur-md transition-opacity duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto px-8 pt-24 pb-10 text-left">
          <ul>
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className={cn(
                  "transition-all duration-300",
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${100 + index * 50}ms` : "0ms",
                }}
              >
                <a
                  href={item.href}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                  className={cn(
                    "group flex items-center justify-between py-4 border-b border-border text-2xl font-semibold transition-colors duration-300",
                    activeSection === item.href
                      ? "text-primary"
                      : "text-foreground/85 hover:text-primary"
                  )}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-sm font-medium text-primary/70">
                      0{index + 1}
                    </span>
                    {item.name}
                  </span>
                  <ArrowRight className="h-5 w-5 opacity-50 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>

          <div
            className={cn(
              "mt-auto pt-10 flex flex-col gap-4 transition-all duration-300",
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: isMenuOpen ? "450ms" : "0ms" }}
          >
            <a
              href="#contact"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              className="cosmic-button py-3 text-center"
            >
              Get In Touch
            </a>
            <a
              href="/Elisha-Oderinde-CV.pdf"
              download
              tabIndex={isMenuOpen ? 0 : -1}
              className="px-6 py-3 rounded-full border border-primary text-primary text-center hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
