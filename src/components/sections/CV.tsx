import { Button } from "@/components/ui/button";
import { Download, Award, Play, ExternalLink } from "lucide-react";

const certifications = [
  {
    year: "2025",
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco Networking Academy",
    link: null, // TODO: Ajoutez le lien vers le certificat
  },
  {
    year: "2024",
    title: "IBM Design Thinking",
    issuer: "IBM SkillsBuild",
    link: null,
  },
  {
    year: "2025",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    link: null,
  },
  {
    year: "2024",
    title: "Google UX Design Certificate",
    issuer: "Coursera",
    link: null,
  },
  {
    year: "2025",
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    link: null,
  },
];

export const CV = () => {
  return (
    <section
      id="cv"
      className="section"
      aria-labelledby="cv-title"
    >
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 id="cv-title" className="section-title">
            CV & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Mon parcours et mes certifications professionnelles
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* CV Download & Video */}
          <div className="space-y-8">
            {/* CV Download Card */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary/10">
                  <Download className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Télécharger mon CV</h3>
                  <p className="text-muted-foreground">Format PDF, prêt à imprimer</p>
                </div>
              </div>
              <Button variant="hero" className="w-full" asChild>
                {/* TODO: Remplacez par le chemin vers votre CV PDF */}
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger le CV (PDF)
                </a>
              </Button>
            </div>

            {/* CV Video Card */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary/10">
                  <Play className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">CV Vidéo</h3>
                  <p className="text-muted-foreground">Présentation en 1 minutes</p>
                </div>
              </div>
              {/* Video placeholder */}
         {/* Video Section */}
<div>
  <div className="aspect-video bg-muted rounded-xl overflow-hidden mb-4">
    <video controls className="w-full h-full rounded-xl">
      <source src="/cvvd.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

    
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <article
                  key={index}
                  className="p-5 rounded-xl bg-card border border-border card-hover group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary font-bold text-sm">
                        {cert.year}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-sm hover:underline inline-flex items-center gap-1 mt-2"
                        >
                          Voir le certificat
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
