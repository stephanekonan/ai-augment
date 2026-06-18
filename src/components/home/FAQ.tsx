import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const faqs = [
  { q: "Comment installer une compétence ?", a: "Chaque compétence est livrée avec un guide d'installation en 2 minutes. Tu copies le skill dans ton interface Claude et c'est actif immédiatement." },
  { q: "Est-ce compatible avec Claude AI ?", a: "Oui, 100% compatible avec Claude (Anthropic) — versions Free, Pro et Team. Optimisé pour Claude 3.5 Sonnet et supérieur." },
  { q: "Est-ce un abonnement ?", a: "Non. Paiement unique. Tu achètes une fois et tu accèdes au pack à vie, mises à jour incluses." },
  { q: "Ai-je les mises à jour ?", a: "Oui, toutes les mises à jour des compétences de ton pack sont incluses à vie." },
  { q: "Est-ce utilisable pour mon business ?", a: "Absolument. Les compétences sont conçues pour un usage professionnel — agences, freelances, startups et créateurs." },
];

export function FAQ() {
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
