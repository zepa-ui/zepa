"use client"

import { useState } from "react"
import { SmoothScroll } from "@/components/landing/smooth-scroll"
import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { LogoMarquee } from "@/components/landing/logo-marquee"
import { BentoGrid } from "@/components/landing/bento-grid"

import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"
import { Preloader } from "@/components/shared/preloader"

export default function Home() {
  const [ready, setReady] = useState(false)

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-landing">
        <Preloader onComplete={() => setReady(true)} />
        {ready && (
          <>
            <Navbar />
            <Hero />
            <LogoMarquee />
            <BentoGrid />
            <FinalCTA />
            <Footer />
          </>
        )}
      </main>
    </SmoothScroll>
  )
}
