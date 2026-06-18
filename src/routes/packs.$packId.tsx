import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { packs } from "@/components/home/Packs";
import { ArrowRight, Check } from "lucide-react";

const packDetails = {
  starter: {
    name: "Starter Pack",
    description: "Le pack idéal pour démarrer avec Claude et améliorer ta communication au quotidien.",
    skills: [
      {
        name: "Humanizer",
        command: "humanizer",
        description: "Rend les textes générés par IA plus naturels et humains.",
        usage: "Colle ton texte généré par IA et demande de l'humaniser.",
        prompt: "Humanise ce texte pour qu'il paraisse écrit par un humain, sans jargon complexe : [ton texte]"
      },
      {
        name: "CompactWriter",
        command: "compact-writer",
        description: "Raccourcit et simplifie les textes trop longs.",
        usage: "Donne un long texte et demande d'en extraire l'essentiel.",
        prompt: "Résume ce texte en 3 puces clés sans perdre l'information principale : [ton texte]"
      },
      {
        name: "Simplifier",
        command: "simplifier",
        description: "Rend les concepts complexes faciles à comprendre.",
        usage: "Demande d'expliquer un concept technique simplement.",
        prompt: "Explique-moi ce concept comme si j'avais 10 ans : [concept]"
      },
      {
        name: "Proofreader",
        command: "proofreader",
        description: "Corrige les fautes et améliore la syntaxe.",
        usage: "Soumets ton brouillon pour une relecture complète.",
        prompt: "Corrige les fautes d'orthographe et de grammaire de ce texte, et améliore la fluidité : [ton texte]"
      }
    ]
  },
  pro: {
    name: "Pro Pack",
    description: "Le pack ultime pour les créateurs de contenu et les vendeurs pour booster l'engagement et les ventes.",
    skills: [
      {
        name: "ViralHook",
        command: "viral-hook",
        description: "Crée des accroches virales pour tes posts sociaux.",
        usage: "Donne le sujet de ton post et demande 5 hooks.",
        prompt: "Génère 5 accroches virales pour un post LinkedIn sur : [ton sujet]"
      },
      {
        name: "TikTokWriter",
        command: "tiktok-writer",
        description: "Écrit des scripts optimisés pour TikTok/Reels.",
        usage: "Donne ton idée de vidéo et obtiens un script complet.",
        prompt: "Écris un script TikTok de 30 secondes très engageant sur : [ton idée]"
      },
      {
        name: "SalesCloser",
        command: "sales-closer",
        description: "Rédige des arguments de vente persuasifs.",
        usage: "Décris ton produit et demande un pitch de vente.",
        prompt: "Rédige un argumentaire de vente persuasif utilisant la méthode AIDA pour : [ton produit/service]"
      },
      {
        name: "ContentRepurpose",
        command: "content-repurpose",
        description: "Transforme un contenu dans de multiples formats.",
        usage: "Donne une vidéo YouTube et transforme-la en thread Twitter.",
        prompt: "Transforme ce texte de blog en un thread Twitter de 5 tweets engageants : [ton texte]"
      }
    ]
  }
};

export const Route = createFileRoute("/packs/$packId")({
  component: PackDetailsPage,
  loader: ({ params }) => {
    const packInfo = packs.find(p => p.id === params.packId);
    const details = packDetails[params.packId as keyof typeof packDetails];
    if (!packInfo || !details) throw notFound();
    return { packInfo, details };
  }
});

function PackDetailsPage() {
  const { packInfo, details } = Route.useLoaderData();

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-32 pb-20 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block transition-colors">
            ← Retour à l'accueil
          </Link>
          
          <div className="grid lg:grid-cols-[1fr_350px] gap-8">
            {/* LEFT SIDE: Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold">{details.name}</h1>
                <p className="text-xl text-muted-foreground mt-4 leading-relaxed">
                  {details.description}
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold border-b border-border pb-2">Détails des compétences</h2>
                {details.skills.map((skill, index) => (
                  <div key={index} className="glass p-6 rounded-2xl space-y-4">
                    <h3 className="font-bold text-primary text-xl">{skill.name}</h3>
                    <p className="text-foreground/90 leading-relaxed"><strong>Ce qu'elle fait :</strong> {skill.description}</p>
                    <p className="text-foreground/90 leading-relaxed"><strong>Comment l'utiliser :</strong> {skill.usage}</p>
                    <div className="bg-background/50 p-4 rounded-xl border border-border/50 text-sm text-muted-foreground mt-4">
                      <div className="mb-3 text-xs flex items-center gap-2">
                        <span>💡</span>
                        <span>Pour appeler cette compétence, tape <code className="bg-muted text-primary px-1.5 py-0.5 rounded font-mono">/{skill.command}</code> dans ton prompt.</span>
                      </div>
                      <span className="font-semibold text-foreground">Exemple de prompt :</span> <br/>
                      <code className="text-primary/90 block mt-2 font-mono">/{skill.command} {skill.prompt}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: Price & Action */}
            <div className="relative">
              <div className="sticky top-32 glass rounded-3xl p-6 sm:p-8 border border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary grid place-items-center">
                    <packInfo.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl">{packInfo.name}</h3>
                    <div className="text-sm text-green-400 font-medium mt-0.5">Paiement unique</div>
                  </div>
                </div>

                <div className="mb-6 flex items-baseline gap-2 flex-wrap">
                  <span className="text-4xl font-display font-bold">{packInfo.price}</span>
                  <span className="text-muted-foreground font-medium">FCFA</span>
                  {packInfo.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through ml-1">{packInfo.oldPrice}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {packInfo.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span>Accès immédiat</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span>Mises à jour à vie</span>
                  </li>
                </ul>

                <a
                  href={packInfo.url}
                  className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground hover:bg-primary-glow transition shadow-xl shadow-primary/40 animate-pulse-glow"
                >
                  Acheter maintenant <ArrowRight className="h-5 w-5" />
                </a>
                
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Paiement 100% sécurisé
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
