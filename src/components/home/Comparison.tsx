import { Check, X } from "lucide-react";

export const comparison = [
  ["Compétences Rédaction", true, true, false, true],
  ["Compétences Contenu Viral", false, true, false, true],
  ["Compétences Développement", false, false, true, true],
  ["Compétences Business", false, false, false, true],
  ["Mises à jour à vie", true, true, true, true],
  ["Support prioritaire", false, true, true, true],
  ["Bonus exclusifs", false, false, false, true],
];

export function Comparison() {
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
