import { MessageCircle } from "lucide-react";

export function Footer() {
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
          <a href="https://wa.me/2250508234878" className="inline-flex w-full justify-center items-center gap-2 glass rounded-full px-4 py-2 text-sm hover:border-primary/40 transition">
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
