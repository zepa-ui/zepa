"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Check, CircleUser, Copy } from "lucide-react"

import { getInstallCommand } from "@/lib/registry/helpers"
import type { HighlightedCodeFile } from "@/lib/registry/highlight"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { CodeBlock } from "./code-block"
import { ComponentDemo } from "./component-demo"

interface ComponentDetailProps {
  slug: string
  title: string
  description: string
  creator: string
  dependencies: string[]
  code: Record<string, HighlightedCodeFile>
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className="border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
    >
      {copied ? (
        <Check className="size-3.5" />
      ) : (
        <Copy className="size-3.5" />
      )}
      {copied ? "Copied" : label}
    </Button>
  )
}

export function ComponentDetail({
  slug,
  title,
  description,
  creator,
  dependencies,
  code,
}: ComponentDetailProps) {
  const installCommand = getInstallCommand(dependencies)
  const codeEntries = Object.entries(code)
  const defaultCodeKey = codeEntries[0]?.[0] ?? ""
  const [activeCodeKey, setActiveCodeKey] = useState(defaultCodeKey)
  const activeCode = code[activeCodeKey]

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col lg:flex-row">
        <aside className="w-full shrink-0 border-b border-white/10 p-6 lg:w-1/4 lg:max-w-sm lg:border-b-0 lg:border-r">
          <Link
            href="/components"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to components
          </Link>

          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {description}
          </p>

          {installCommand ? (
            <section className="mt-8 space-y-3">
              <h2 className="text-xs font-medium uppercase tracking-wider text-white/40">
                Install
              </h2>
              <pre className="overflow-x-auto rounded-lg border border-white/10 bg-zinc-950 p-3 text-xs text-white/80">
                {installCommand}
              </pre>
              <CopyButton value={installCommand} label="Copy command" />
            </section>
          ) : null}

          {codeEntries.length > 0 ? (
            <section className="mt-8 space-y-3">
              <h2 className="text-xs font-medium uppercase tracking-wider text-white/40">
                Code
              </h2>
              <div className="flex flex-wrap gap-2">
                {codeEntries.map(([filename]) => {
                  const isActive = activeCodeKey === filename

                  return (
                    <button
                      key={filename}
                      type="button"
                      onClick={() => setActiveCodeKey(filename)}
                      className={cn(
                        "rounded-lg border px-3 py-1.5 font-mono text-xs transition",
                        isActive
                          ? "border-white bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                          : "border-white/10 bg-transparent text-white/45 hover:border-white/25 hover:bg-white/5 hover:text-white/80"
                      )}
                    >
                      {filename}
                    </button>
                  )
                })}
              </div>

              <p className="flex items-center gap-2 text-sm text-white/50">
                <CircleUser className="size-4 shrink-0 text-white/40" />
                <span>
                  Created by{" "}
                  <span className="font-medium text-white/80">
                    {creator.charAt(0).toUpperCase() + creator.slice(1)}
                  </span>
                </span>
              </p>

              {activeCode ? (
                <>
                  <CodeBlock html={activeCode.html} />
                  <CopyButton value={activeCode.raw} label="Copy code" />
                </>
              ) : null}
            </section>
          ) : null}

          {dependencies.length > 0 ? (
            <section className="mt-8 space-y-3">
              <h2 className="text-xs font-medium uppercase tracking-wider text-white/40">
                Dependencies
              </h2>
              <ul className="flex flex-wrap gap-2">
                {dependencies.map((dep) => (
                  <li
                    key={dep}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80"
                  >
                    {dep}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </aside>

        <section className="flex flex-1 flex-col p-6 lg:w-3/4">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-white/40">
            Live demo
          </p>
          <ComponentDemo slug={slug} />
        </section>
      </div>
    </main>
  )
}
