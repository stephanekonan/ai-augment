import { ArrowRight } from "lucide-react";

export function Nav() {
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
              Passer à l'action <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
