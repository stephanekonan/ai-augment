import { useState } from "react";

import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  Code2,
  Crown,
  MessageCircle,
  Rocket,
  Shield,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claude Skills - Compétences IA premium pour Claude AI" },
      { name: "description", content: "Transforme Claude AI en expert spécialisé. Packs de compétences IA pour créer du contenu viral, vendre plus et coder mieux." },
      { property: "og:title", content: "Claude Skills - Compétences IA premium" },
      { property: "og:description", content: "Packs de compétences IA prêtes à l'emploi pour Claude AI." },
    ],
  }),
  component: Landing,
});

const advantages = [
  { icon: Bot, title: "Réponses plus humaines", desc: "Des textes naturels qui résonnent avec ton audience." },
  { icon: Zap, title: "Gain de temps immédiat", desc: "Active une compétence, obtiens le résultat en secondes." },
  { icon: TrendingUp, title: "Contenu plus viral", desc: "Hooks et structures testés pour exploser l'engagement." },
  { icon: ShoppingBag, title: "Meilleures ventes", desc: "Argumentaires de closing qui convertissent vraiment." },
  { icon: Code2, title: "Code plus propre", desc: "Architecture solide, revues automatisées, moins de bugs." },
  { icon: Rocket, title: "Productivité maximale", desc: "Un assistant spécialisé pour chaque tâche du quotidien." },
];

const packs = [
  {
    id: "starter", name: "Starter Pack", icon: Sparkles, price: "1 500", oldPrice: null,
    tagline: "Pour démarrer avec Claude",
    skills: ["Humanizer", "Compact", "Simplifier", "Proofreader"],
    benefits: ["Textes naturels et clairs", "Communication améliorée", "Gain de temps quotidien"],
    featured: false,
  },
  {
    id: "pro", name: "Pro Pack", icon: TrendingUp, price: "2 500", oldPrice: "5 000 FCFA",
    tagline: "Pour créateurs & vendeurs",
    skills: ["ViralHook", "TikTokWriter", "SalesCloser", "ContentRepurpose"],
    benefits: ["Création de contenu viral", "Plus d'engagement", "Plus de conversions", "Business rapide"],
    featured: false,
  },
  {
    id: "expert", name: "Expert Pack", icon: Code2, price: "3 500", oldPrice: "7 000 FCFA",
    tagline: "Pour développeurs exigeants",
    skills: ["CodeReviewer", "CleanArchitect", "BugHunter", "APIArchitect"],
    benefits: ["Code propre et scalable", "Moins de bugs", "Architecture solide", "Niveau senior assisté"],
    featured: false,
  },
  {
    id: "ultimate", name: "Ultimate Pack", icon: Crown, price: "6 000", oldPrice: "12 000 FCFA",
    tagline: "La solution IA complète",
    skills: ["Tous les packs inclus", "+ PromptEngineer", "+ StartupAdvisor", "+ AutomationExpert", "+ BusinessCoach"],
    benefits: ["Dev + business + contenu", "Remplace plusieurs outils", "Accélère tous les projets", "Best value absolue"],
    featured: true,
  },
];

const comparison = [
  ["Compétences Rédaction", true, true, false, true],
  ["Compétences Contenu Viral", false, true, false, true],
  ["Compétences Développement", false, false, true, true],
  ["Compétences Business", false, false, false, true],
  ["Mises à jour à vie", true, true, true, true],
  ["Support prioritaire", false, true, true, true],
  ["Bonus exclusifs", false, false, false, true],
];

const testimonials = [
  { name: "Aïssa K.", role: "Créatrice de contenu", result: "+340% d'engagement en 3 semaines grâce au Pro Pack. Mes hooks TikTok cartonnent enfin.", initials: "AK" },
  { name: "Mamadou D.", role: "Développeur Full-Stack", result: "L'Expert Pack a transformé ma façon de coder. Code reviews instantanées, architecture clean.", initials: "MD" },
  { name: "Fatou S.", role: "Fondatrice SaaS", result: "L'Ultimate vaut chaque franc. Je l'utilise pour le contenu, le code et la stratégie business.", initials: "FS" },
];

const faqs = [
  { q: "Comment installer une compétence ?", a: "Chaque compétence est livrée avec un guide d'installation en 2 minutes. Tu copies le skill dans ton interface Claude et c'est actif immédiatement." },
  { q: "Est-ce compatible avec Claude AI ?", a: "Oui, 100% compatible avec Claude (Anthropic) — versions Free, Pro et Team. Optimisé pour Claude 3.5 Sonnet et supérieur." },
  { q: "Est-ce un abonnement ?", a: "Non. Paiement unique. Tu achètes une fois et tu accèdes au pack à vie, mises à jour incluses." },
  { q: "Ai-je les mises à jour ?", a: "Oui, toutes les mises à jour des compétences de ton pack sont incluses à vie." },
  { q: "Est-ce utilisable pour mon business ?", a: "Absolument. Les compétences sont conçues pour un usage professionnel — agences, freelances, startups et créateurs." },
];

function Landing() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Advantages />
      <Packs />
      <Comparison />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
        <nav className="glass rounded-2xl px-4 sm:px-6 py-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <img src="/logo.webp" alt="Claude Skills Logo" className="h-12 w-12 shrink-0 rounded-lg" />
            <span className="font-display font-bold truncate">Claude Skills</span>
          </a>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a href="#packs" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition">Packs</a>
            <a href="#faq" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition">FAQ</a>
            <a href="#packs" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition shadow-lg shadow-primary/30">
              Acheter <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs sm:text-sm text-muted-foreground mb-8 animate-float-up">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Nouveau · 16 compétences IA disponibles
        </div>
        <h1 className="animate-float-up text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]" style={{ animationDelay: "60ms" }}>
          Transforme <span className="text-gradient">Claude AI</span> en expert spécialisé en quelques secondes
        </h1>
        <p className="animate-float-up mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto" style={{ animationDelay: "120ms" }}>
          Accède à une bibliothèque de compétences IA prêtes à l'emploi pour créer du contenu viral, vendre plus, coder mieux et gagner du temps.
        </p>
        <div className="animate-float-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-3" style={{ animationDelay: "180ms" }}>
          <a href="#packs" className="glass rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
            Découvrir les packs
          </a>
          <a href="#packs" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition shadow-xl shadow-primary/40 animate-pulse-glow">
            Passe à l'achat
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <div className="animate-float-up mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto" style={{ animationDelay: "240ms" }}>
          {[["16", "Compétences"], ["3 800+", "Utilisateurs"], ["4.9/5", "Satisfaction"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">{n}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">Avantages</div>
          <h2 className="text-3xl sm:text-5xl font-bold">Pourquoi utiliser ces compétences Claude AI ?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {advantages.map((a, i) => (
            <div key={a.title} className="group glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300" style={{ background: "var(--gradient-card)" }}>
              <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary grid place-items-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition">
                <a.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packs() {
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
            <div key={p.id} className={`relative rounded-3xl p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
              p.featured
                ? "bg-gradient-to-br from-primary/20 via-card to-card border-2 border-primary shadow-2xl shadow-primary/30 lg:scale-105"
                : "glass hover:border-primary/40"
            }`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg">
                  <Crown className="h-3 w-3" /> BEST VALUE
                </div>
              )}
              <div className={`h-11 w-11 rounded-xl grid place-items-center mb-4 ${p.featured ? "bg-primary text-primary-foreground" : "bg-primary/15 text-primary"}`}>
                <p.icon className="h-5 w-5" />
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

              <a href="#cta" className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                p.featured
                  ? "bg-primary text-primary-foreground hover:bg-primary-glow shadow-lg shadow-primary/40 animate-pulse-glow"
                  : "glass hover:bg-primary hover:text-primary-foreground hover:border-primary"
              }`}>
                Passe à l'achat <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const cols = ["Starter", "Pro", "Expert", "Ultimate"];
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">Comparaison</div>
          <h2 className="text-3xl sm:text-5xl font-bold">Quel pack te correspond ?</h2>
        </div>

        <div className="glass rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-5 font-semibold">Fonctionnalité</th>
                  {cols.map((c) => (
                    <th key={c} className={`p-5 font-display font-bold text-center ${c === "Ultimate" ? "text-primary bg-primary/10" : ""}`}>
                      {c}
                      {c === "Ultimate" && <div className="text-[10px] font-semibold text-primary/80 mt-0.5">BEST VALUE</div>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="p-5 text-muted-foreground">{row[0]}</td>
                    {row.slice(1).map((v, j) => (
                      <td key={j} className={`p-5 text-center ${cols[j] === "Ultimate" ? "bg-primary/5" : ""}`}>
                        {v ? (
                          <Check className={`h-5 w-5 mx-auto ${cols[j] === "Ultimate" ? "text-primary" : "text-primary/80"}`} />
                        ) : (
                          <X className="h-4 w-4 mx-auto text-muted-foreground/30" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">Témoignages</div>
          <h2 className="text-3xl sm:text-5xl font-bold">Ils ont accéléré avec Claude Skills</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300" style={{ background: "var(--gradient-card)" }}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.result}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center font-display font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold truncate">{t.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-14">
          <div className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">FAQ</div>
          <h2 className="text-3xl sm:text-5xl font-bold">Questions fréquentes</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 sm:p-6 text-left hover:bg-white/[0.02] transition"
              >
                <span className="font-display font-semibold">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform shrink-0 ${open === i ? "rotate-180 text-primary" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-muted-foreground leading-relaxed animate-float-up">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center border border-primary/30" style={{ background: "linear-gradient(135deg, oklch(0.25 0.06 38), oklch(0.18 0.02 60))" }}>
          <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at center, oklch(0.72 0.18 38 / 0.3), transparent 70%)" }} />
          <div className="relative">
            <Shield className="h-10 w-10 mx-auto text-primary mb-5" />
            <h2 className="text-3xl sm:text-5xl font-bold">Passe au niveau supérieur avec <br> <span className="text-gradient">Claude AI</span></h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Choisis ton pack et débloque la puissance des compétences IA dès aujourd'hui.
            </p>
            <a href="#packs" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground hover:bg-primary-glow transition shadow-2xl shadow-primary/50 animate-pulse-glow">
              PASSE À L'ACHAT <ArrowRight className="h-5 w-5" />
            </a>
            <div className="mt-6 text-xs text-muted-foreground">Paiement unique · Accès immédiat · Mises à jour à vie</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-4 sm:px-6 py-12">
      <div className="mx-auto max-w-7xl grid sm:grid-cols-[1fr_auto] gap-8 items-start">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.webp" alt="Claude Skills Logo" className="h-12 w-12 shrink-0 rounded-lg" />
            <span className="font-display font-bold">Claude Skills</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Bibliothèque premium de compétences IA pour Claude. Boostez votre contenu, vos ventes et votre code.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <a href="https://wa.me/2250508234878" className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm hover:border-primary/40 transition">
            <MessageCircle className="h-4 w-4 text-primary" /> Contact WhatsApp
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-10 pt-6 border-t border-border/50 text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} Claude Skills. Tous droits réservés.
      </div>
    </footer>
  );
}
