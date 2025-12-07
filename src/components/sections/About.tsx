import { MapPin, Mail, Phone, Calendar, Globe } from "lucide-react";

const personalInfo = [
  { icon: Calendar, label: "Âge", value: "20 ans (18/09/2004)" },
  { icon: MapPin, label: "Ville", value: "Sousse, Tunisie" },
  { icon: Mail, label: "E-mail", value: "khalilchouchen112@gmail.com", href: "mailto:khalilchouchen112@gmail.com" },
  { icon: Phone, label: "Téléphone", value: "+216 56 747 765", href: "tel:+21656747765" },
];

const languages = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "Indépendant" },
  { name: "Anglais", level: "Indépendant" },
  { name: "Allemand", level: "Élémentaire" },
];

export const About = () => {
  return (
    <section
      id="apropos"
      className="section bg-card/50"
      aria-labelledby="about-title"
    >
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 id="about-title" className="section-title">
            À propos de <span className="gradient-text">moi</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Découvrez mon parcours et mes aspirations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-none">
            <div className="relative">
              {/* Profile image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-none">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border overflow-hidden">
                  <img
                    src="/pdp.jpeg"
                    alt="Photo de Mohamed Khalil Chouchen"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl" />
              </div>
            </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl" />
            </div>
          </div>

          {/* About content */}
          <div className="space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Je suis <strong className="text-foreground">Mohamed Khalil Chouchen</strong>, 
                étudiant en 3<sup>ᵉ</sup> année spécialisé en Internet of Things (IoT) à Sousse, Tunisie.
              </p>
              <p>
                Passionné par les nouvelles technologies, je m'intéresse particulièrement au 
                <strong className="text-foreground"> développement web</strong> (front-end et back-end), 
                à l'<strong className="text-foreground">intelligence artificielle</strong> et à 
                l'<strong className="text-foreground">UX/UI design</strong>. J'aime créer des solutions 
                innovantes qui allient esthétique et fonctionnalité.
              </p>
              <p>
                Actuellement basé à <strong className="text-foreground">Bhayer, Hammam Sousse</strong>, 
                je suis à la recherche de projets concrets : stages, missions freelance ou 
                collaborations pour mettre en pratique mes compétences et continuer à apprendre.
              </p>
            </div>

            {/* Personal info cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {personalInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <info.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-foreground">Langues</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50"
                  >
                    <span className="text-foreground font-medium">{lang.name}</span>
                    <span className="text-muted-foreground text-sm"> – {lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
