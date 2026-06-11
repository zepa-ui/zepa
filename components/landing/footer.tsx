"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} role="contentinfo" className="border-t border-zinc-800 bg-landing">
      <div className="mx-auto max-w-6xl px-4 py-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <Link href="/" className="inline-flex shrink-0 items-center">
            <img
              src="/zzepa.png"
              alt="Zepa UI"
              className="h-7 w-auto max-w-[120px] object-contain"
            />
          </Link>

          <p className="text-base text-zinc-400">
            Made by Sameer with <span aria-hidden="true">❤️</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
