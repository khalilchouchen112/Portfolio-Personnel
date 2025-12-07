import { 
  Palette, 
  Brain, 
  Code, 
  Database, 
  GitBranch, 
  Lightbulb,
  Users,
  Target,
  Sparkles
} from "lucide-react";

const technicalSkills = [
  {
    category: "Design et UI/UX",
    icon: Palette,
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe XD", "Figma", "Prototypage", "Maquettes"],
  },
  {
    category: "Intelligence Artificielle",
    icon: Brain,
    skills: ["Python", "Concepts d'IA", "Machine Learning", "Scripting"],
  },
  {
    category: "Développement Frontend",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Angular", "TypeScript"],
  },
  {
    category: "Backend & Bases de données",
    icon: Database,
    skills: ["PHP", "MongoDB", "APIs REST", "Gestion de données", "Node.js"],
  },
  {
    category: "Outils & Bonnes pratiques",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Débogage", "Tests", "Agile", "Scrum"],
  },
  {
    category: "Programmation",
    icon: Lightbulb,
    skills: ["C++", "Python", "Java", "Problem Solving", "Algorithmes"],
  },
];

const softSkills = [
  {
    category: "Relations & Personnel",
    icon: Users,
    skills: ["Motivé", "Autonome", "Rigoureux", "Responsable"],
  },
  {
    category: "Organisation",
    icon: Target,
    skills: ["Gestion du temps", "Apprentissage rapide", "Curiosité", "Sens de l'organisation"],
  },
  {
    category: "Communication",
    icon: Users,
    skills: ["Esprit d'équipe", "Écoute active", "Adaptabilité", "Communication claire"],
  },
  {
    category: "Créativité",
    icon: Sparkles,
    skills: ["Esprit critique", "Créativité", "Persévérance", "Professionnalisme"],
  },
];

export const Skills = () => {
  return (
    <section
      id="competences"
      className="section"
      aria-labelledby="skills-title"
    >
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 id="skills-title" className="section-title">
            Compétences <span className="gradient-text">techniques</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Un aperçu de mes compétences en développement, design et technologies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technicalSkills.map((group, index) => (
            <article
              key={group.category}
              className="p-6 rounded-2xl bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <group.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Soft <span className="gradient-text">Skills</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((group, index) => (
              <article
                key={group.category}
                className="p-6 rounded-2xl bg-secondary/50 border border-border/50 text-center card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                  <group.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h4 className="text-base font-semibold text-foreground mb-3">{group.category}</h4>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
