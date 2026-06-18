import { ArrowRight } from "lucide-react";

export function Hero() {
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
