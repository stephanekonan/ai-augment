import { Bot, Code2, Rocket, ShoppingBag, TrendingUp, Zap } from "lucide-react";

export const advantages = [
  { icon: Bot, title: "Réponses plus humaines", desc: "Des textes naturels qui résonnent avec ton audience." },
  { icon: Zap, title: "Gain de temps immédiat", desc: "Active une compétence, obtiens le résultat en secondes." },
  { icon: TrendingUp, title: "Contenu plus viral", desc: "Hooks et structures testés pour exploser l'engagement." },
  { icon: ShoppingBag, title: "Meilleures ventes", desc: "Argumentaires de closing qui convertissent vraiment." },
  { icon: Code2, title: "Code plus propre", desc: "Architecture solide, revues automatisées, moins de bugs." },
  { icon: Rocket, title: "Productivité maximale", desc: "Un assistant spécialisé pour chaque tâche du quotidien." },
];

export function Advantages() {
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
