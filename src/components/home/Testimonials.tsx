import { Star } from "lucide-react";

export const testimonials = [
  { name: "Aïssa K.", role: "Créatrice de contenu", result: "+340% d'engagement en 3 semaines grâce au Pro Pack. Mes hooks TikTok cartonnent enfin.", initials: "AK" },
  { name: "Mamadou D.", role: "Développeur Full-Stack", result: "L'Expert Pack a transformé ma façon de coder. Code reviews instantanées, architecture clean.", initials: "MD" },
  { name: "Fatou S.", role: "Fondatrice SaaS", result: "L'Ultimate vaut chaque franc. Je l'utilise pour le contenu, le code et la stratégie business.", initials: "FS" },
];

export function Testimonials() {
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
