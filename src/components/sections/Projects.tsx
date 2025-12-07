import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

// TODO: Remplacez ces projets fictifs par vos vrais projets
const projects = [
  {
    id: 1,
    title: "SmartHome IoT Dashboard",
    description:
      "Application web de gestion domotique permettant de contrôler et surveiller les appareils connectés d'une maison intelligente en temps réel.",
    stack: ["React", "Node.js", "MongoDB", "MQTT", "Socket.io"],
    github: "https://github.com/",
    demo: "https://example.com/",
    image: null, // TODO: Ajoutez une image du projet
  },
  {
    id: 2,
    title: "AI Weather Predictor",
    description:
      "Système de prédiction météorologique utilisant le machine learning pour analyser les données historiques et fournir des prévisions précises.",
    stack: ["Python", "TensorFlow", "Flask", "React", "Chart.js"],
    github: "https://github.com/",
    demo: null,
    image: null,
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "Plateforme e-commerce complète avec panier, paiement sécurisé, gestion des commandes et tableau de bord administrateur.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "https://example.com/",
    image: null,
  },
  {
    id: 4,
    title: "Portfolio Personnel",
    description:
      "Site portfolio responsive et accessible présentant mes projets, compétences et parcours professionnel avec un design moderne.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/khalilchouchen112/Portfolio-Personnel",
    demo: null,
    image: null,
  },
];

export const Projects = () => {
  return (
    <section
      id="projets"
      className="section bg-card/50"
      aria-labelledby="projects-title"
    >
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 id="projects-title" className="section-title">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Une sélection de projets sur lesquels j'ai travaillé
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-card border border-border overflow-hidden card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project image placeholder */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Capture d'écran du projet ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <Folder className="h-16 w-16 text-primary/30" aria-hidden="true" />
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Voir le code source de ${project.title} sur GitHub`}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Voir la démo de ${project.title}`}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Démo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note for adding more projects */}
        <p className="text-center text-muted-foreground mt-12 text-sm">
          {/* TODO: Ajoutez plus de projets en modifiant le tableau 'projects' ci-dessus */}
          Plus de projets à venir...
        </p>
      </div>
    </section>
  );
};
