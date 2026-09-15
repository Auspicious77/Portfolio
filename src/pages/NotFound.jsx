import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex items-center justify-center px-4">
      <ThemeToggle />
      <StarBackground />

      <div className="relative z-10 space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold text-primary text-glow">
          404
        </h1>
        <p className="text-lg text-muted-foreground">
          This page drifted off into space.
        </p>
        <Link
          to="/"
          className="cosmic-button w-fit flex items-center mx-auto gap-2"
        >
          <ArrowLeft size={16} /> Back Home
        </Link>
      </div>
    </div>
  );
};
