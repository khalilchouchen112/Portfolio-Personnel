import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border bg-card/50" role="contentinfo">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Mohamed Khalil Chouchen. Tous droits réservés.
          </p>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Conçu avec <Heart className="h-4 w-4 text-primary inline" aria-hidden="true" /> 
            <span className="sr-only">amour</span>
            — Passionné par l'IoT, l'IA et l'expérience utilisateur
          </p>
        </div>

        {/* Quick skills reminder */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {["React", "IoT", "UX/UI", "Python", "Next.js"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-muted-foreground border border-border/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};
