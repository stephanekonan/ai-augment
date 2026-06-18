import { Analytics } from "@vercel/analytics/react";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Advantages } from "./Advantages";
import { Packs } from "./Packs";
import { Comparison } from "./Comparison";
import { Testimonials } from "./Testimonials";
import { FAQ } from "./FAQ";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";

export function Landing() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Advantages />
      <Packs />
      <Comparison />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <Analytics />
    </main>
  );
}
