import { Button } from "@/components/ui/button";
import { Download, Play, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const scrollToAbout = () => {
    const element = document.getElementById("apropos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
      style={{ background: "var(--gradient-hero)" }}
      aria-labelledby="hero-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-500" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Main heading */}
        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in"
        >
          <span className="gradient-text">Mohamed Khalil</span>
          <br />
          <span className="text-foreground">Chouchen</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 opacity-0 animate-fade-in animation-delay-200">
          Étudiant en 3<sup>ᵉ</sup> année Internet of Things (IoT) à Sousse
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in animation-delay-300">
          Passionné par le développement web, l'IoT et l'intelligence artificielle.
          Je crée des expériences numériques innovantes en alliant design moderne et technologies de pointe.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in animation-delay-400">
          <Button
            variant="hero"
            asChild
          >
            {/* TODO: Remplacez le href par le chemin vers votre CV PDF */}
            <a href="/cv.pdf" download aria-label="Télécharger mon CV au format PDF">
              <Download className="mr-2 h-5 w-5" />
              Télécharger mon CV
            </a>
          </Button>
          <Button
            variant="heroOutline"
            onClick={() => setIsVideoOpen(true)}
            aria-haspopup="dialog"
          >
            <Play className="mr-2 h-5 w-5" />
            Voir mon CV vidéo
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float cursor-pointer"
        aria-label="Défiler vers la section À propos"
      >
        <ChevronDown className="h-8 w-8" />
      </button>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-3xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Mon CV vidéo</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Découvrez mon parcours et mes motivations en vidéo.
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <video controls className="w-full h-full rounded-lg">
              <source src="/cvvd.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
