import { ArrowRight, Shield } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="cta" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center border border-primary/30" style={{ background: "linear-gradient(135deg, oklch(0.25 0.06 38), oklch(0.18 0.02 60))" }}>
          <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at center, oklch(0.72 0.18 38 / 0.3), transparent 70%)" }} />
          <div className="relative">
            <Shield className="h-10 w-10 mx-auto text-primary mb-5" />
            <h2 className="text-3xl sm:text-5xl font-bold">
              Passe au niveau supérieur avec <br /> <span className="text-gradient">Claude AI</span>
            </h2>
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
