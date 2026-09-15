import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center gap-4">
      <p className="text-sm text-muted-foreground text-left">
        &copy; {new Date().getFullYear()} Elisha.co. All rights reserved.
        <span className="block sm:inline sm:ml-2">
          Fullstack Developer — Web, Mobile &amp; Backend.
        </span>
      </p>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};
