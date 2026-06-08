"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const EXIT_DELAY_MS = 1400

type PreloaderProps = {
  onComplete?: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add("preloading")

    return () => {
      document.documentElement.classList.remove("preloading")
    }
  }, [])

  const handleVideoEnd = () => {
    setIsExiting(true)

    setTimeout(() => {
      document.documentElement.classList.remove("preloading")
      setLoading(false)
      onComplete?.()
    }, EXIT_DELAY_MS)
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          animate={
            isExiting
              ? {
                  opacity: 0,
                  scale: 1.15,
                  filter: "blur(24px)",
                  y: -40,
                }
              : {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }
          }
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020202]"
        >
          <motion.video
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 w-[320px] object-contain md:w-[420px]"
          >
            <source src="/ss.mp4" type="video/mp4" />
          </motion.video>
        </motion.div>
      )}
    </AnimatePresence>
  )
}