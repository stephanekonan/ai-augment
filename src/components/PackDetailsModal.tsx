import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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

export function PackDetailsModal({ isOpen, onClose, packId }: { isOpen: boolean, onClose: () => void, packId: string | null }) {
  if (!packId || !packDetails[packId as keyof typeof packDetails]) return null;

  const pack = packDetails[packId as keyof typeof packDetails];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{pack.name}</DialogTitle>
          <DialogDescription className="text-base mt-2">
            {pack.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <h3 className="text-lg font-semibold border-b pb-2">Détails des compétences</h3>
          {pack.skills.map((skill, index) => (
            <div key={index} className="bg-muted/30 p-4 rounded-lg space-y-3">
              <h4 className="font-bold text-primary text-lg">{skill.name}</h4>
              <p className="text-sm text-foreground/90"><strong>Ce qu'elle fait :</strong> {skill.description}</p>
              <p className="text-sm text-foreground/90"><strong>Comment l'utiliser :</strong> {skill.usage}</p>
              <div className="bg-background p-3 rounded border text-sm text-muted-foreground">
                <div className="mb-2 text-xs">
                  💡 Pour appeler cette compétence, tape <code className="bg-muted text-primary px-1 py-0.5 rounded">/{skill.command}</code> dans ton prompt.
                </div>
                <span className="font-semibold text-foreground">Exemple de prompt :</span> <br/>
                <code className="text-primary/80 block mt-1">/{skill.command} {skill.prompt}</code>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
