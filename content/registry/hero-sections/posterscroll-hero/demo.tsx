"use client"

import { useEffect, useRef } from "react"

import { PeacockLogo } from "./ui/peacock-logo"
import "./ui/styles.css"
import { resolveTmdbApiKey } from "./ui/tmdb-api-key"
import { initPeacockScene } from "./ui/usePeacockScene"

function PosterScrollHero() {
  const postersRef = useRef<HTMLDivElement>(null)
  const apiKey = resolveTmdbApiKey()

  useEffect(() => {
    const container = postersRef.current
    if (!container) return

    const cleanup = initPeacockScene(container, { apiKey })
    return cleanup
  }, [apiKey])

  return (
    <div className="posterscroll-hero">
      <div className="posterscroll-root">
        <div ref={postersRef} className="posterscroll-posters" />

        <div className="posterscroll-logo">
          <PeacockLogo />
        </div>
      </div>
    </div>
  )
}

export default PosterScrollHero
