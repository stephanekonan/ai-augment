import { ArrowRight, Check, Crown, Sparkles, Star, TrendingUp, Code2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const packs = [
  {
    id: "starter", name: "Starter Pack", icon: Sparkles, price: "1 500", oldPrice: null,
    tagline: "Pour démarrer avec Claude",
    skills: ["Humanizer", "CompactWriter", "Simplifier", "Proofreader"],
    benefits: ["Textes naturels et clairs", "Communication améliorée", "Gain de temps quotidien"],
    featured: false,
    available: true,
    url: "#starterUrl",
  },
  {
    id: "pro", name: "Pro Pack", icon: TrendingUp, price: "2 500", oldPrice: "5 000 FCFA",
    tagline: "Pour créateurs & vendeurs",
    skills: ["ViralHook", "TikTokWriter", "SalesCloser", "ContentRepurpose"],
    benefits: ["Création de contenu viral", "Plus d'engagement", "Plus de conversions", "Business rapide"],
    featured: false,
    available: true,
    url: "#proUrl",
  },
  {
    id: "expert", name: "Expert Pack", icon: Code2, price: "3 500", oldPrice: "7 000 FCFA",
    tagline: "Pour développeurs exigeants",
    skills: ["CodeReviewer", "CleanArchitect", "BugHunter", "APIArchitect"],
    benefits: ["Code propre et scalable", "Moins de bugs", "Architecture solide", "Niveau senior assisté"],
    featured: false,
    available: false,
    url: "#expertUrl",
  },
  {
    id: "ultimate", name: "Ultimate Pack", icon: Crown, price: "6 000", oldPrice: "12 000 FCFA",
    tagline: "La solution IA complète",
    skills: ["Tous les packs inclus", "+ PromptEngineer", "+ StartupAdvisor", "+ AutomationExpert", "+ BusinessCoach"],
    benefits: ["Dev + business + contenu", "Remplace plusieurs outils", "Accélère tous les projets", "Best value absolue"],
    featured: true,
    available: false,
    url: "#ultimateUrl",
  },
];

export function Packs() {

  return (
    <section id="packs" className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">Packs</div>
          <h2 className="text-3xl sm:text-5xl font-bold">Choisis ton arsenal IA</h2>
          <p className="mt-4 text-muted-foreground">Paiement unique. Mises à jour à vie. Activation immédiate.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-5">
          {packs.map((p) => (
            <div 
              key={p.id} 
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
              p.featured
                ? "bg-gradient-to-br from-primary/20 via-card to-card border-2 border-primary shadow-2xl shadow-primary/30 lg:scale-105"
                : "glass hover:border-primary/40"
            }`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg">
                  <Crown className="h-3 w-3" /> BEST VALUE
                </div>
              )}
              <div className="flex justify-between items-center mb-4">

                <div className={`h-11 w-11 rounded-xl grid place-items-center ${p.featured ? "bg-primary text-primary-foreground" : "bg-primary/15 text-primary"}`}>
                  <p.icon className="h-5 w-5" />
                </div>

                <div>

                  {p.available && (
                      <span className="text-green-400 bg-green-700/50 px-2 rounded-full font-display">Disponible</span>
                  )}

                  {!p.available && (
                      <span className="text-gray-400 bg-gray-700/50 px-2 rounded-full font-display">Très bientôt</span>
                  )}

                </div>

              </div>
              <h3 className="font-display font-bold text-xl">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>

              <div className="mt-5 flex items-baseline gap-2 flex-wrap">
                <span className="text-3xl sm:text-4xl font-display font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">FCFA</span>
                {p.oldPrice && (
                  <span className="text-sm text-muted-foreground line-through ml-1">{p.oldPrice}</span>
                )}
              </div>

              <div className="my-6 h-px bg-border" />

              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Compétences</div>
              <ul className="space-y-2 mb-5">
                {p.skills.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-primary" : "text-primary"}`} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Bénéfices</div>
              <ul className="space-y-2 mb-7 flex-1">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Star className="h-3.5 w-3.5 mt-1 shrink-0 text-primary/70 fill-primary/30" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {(p.id === "starter" || p.id === "pro") ? (
                <Link
                  to="/packs/$packId"
                  params={{ packId: p.id }}
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition bg-primary text-primary-foreground hover:bg-primary-glow shadow-lg shadow-primary/40 animate-pulse-glow`}
                >
                  Voir les détails <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <a
                  href={p.available ? p.url : "#"}
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    p.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary-glow shadow-lg shadow-primary/40 animate-pulse-glow"
                      : "glass hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  } ${!p.available && "cursor-not-allowed opacity-60 pointer-events-none"}`}
                >
                  {p.available ? "Choisir" : "Bientôt disponible"}
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
