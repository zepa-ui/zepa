import { SmoothScroll } from "@/components/landing/smooth-scroll"
import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { LogoMarquee } from "@/components/landing/logo-marquee"
import { BentoGrid } from "@/components/landing/bento-grid"

import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-950">
        <Navbar />
        <Hero />
        <LogoMarquee />
        <BentoGrid />
        <FinalCTA />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
