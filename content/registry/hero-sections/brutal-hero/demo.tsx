"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Navbar } from "./ui/navbar"
import { WorkflowDiagram } from "./ui/workflow-diagram"

const ease = [0.22, 1, 0.36, 1] as const

function BrutalHero() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  return (
    <div
      className="brutal-hero flex min-h-screen flex-col dot-grid-bg bg-background text-foreground"
      data-theme={theme}
    >
      <Navbar theme={theme} onThemeChange={setTheme} />
      <main className="flex flex-1 flex-col items-center justify-center px-12 pb-12 lg:px-24 lg:pb-16">
        <section className="relative w-full max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease }}
              className="font-pixel text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground mb-2 select-none"
            >
              DEPLOY. SCALE.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="w-full max-w-2xl my-4 lg:my-6"
            >
              <WorkflowDiagram />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="font-pixel text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground mb-4 select-none"
              aria-hidden="true"
            >
              ROUTE.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease }}
              className="text-xs lg:text-sm text-muted-foreground max-w-md mb-6 leading-relaxed font-mono"
            >
              SYS.INT is the deterministic deployment layer between your models and
              your users. Sub-5ms inference. Global edge routing. Full operational
              control.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-0 bg-foreground text-background text-sm font-mono tracking-wider uppercase"
            >
              <span className="flex items-center justify-center w-10 h-10 bg-[#ea580c]">
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="text-background"
                  />
                </motion.span>
              </span>
              <span className="px-5 py-2.5">Request a Demo</span>
            </motion.button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default BrutalHero
