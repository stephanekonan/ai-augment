import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/home/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claude Skills - Compétences IA premium pour Claude AI" },
      { name: "description", content: "Transforme Claude AI en expert spécialisé. Packs de compétences IA pour créer du contenu viral, vendre plus et coder mieux." },
      { property: "og:title", content: "Claude Skills - Compétences IA premium" },
      { property: "og:description", content: "Packs de compétences IA prêtes à l'emploi pour Claude AI." },
    ],
  }),
  component: Landing,
});
