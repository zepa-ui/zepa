import { ArrowRight, BookOpenText, CheckCircle2, FileText, LayoutGrid, ShieldCheck, Sparkles } from "lucide-react"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pt-32 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
              <BookOpenText className="h-4 w-4 text-emerald-400" />
              Contributing Guide
            </div>

            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
                Adding Components
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                Follow the structure strictly. Components with incorrect naming, missing previews,
                broken imports, or bad organization will not be accepted.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300">
                <ShieldCheck className="h-4 w-4 text-cyan-400" />
                Quality checks
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300">
                <Sparkles className="h-4 w-4 text-amber-400" />
                Preview required
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300">
                <LayoutGrid className="h-4 w-4 text-violet-400" />
                Organized structure
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-5 backdrop-blur">
              <FileText className="h-5 w-5 text-emerald-400" />
              <p className="mt-4 text-sm font-medium text-white">Submission ready</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">Use the exact registry layout and include preview assets.</p>
            </div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-5 backdrop-blur">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <p className="mt-4 text-sm font-medium text-white">Accepted patterns</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">Keep local UI inside the component folder and avoid global helpers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl space-y-16">
          <div>
            <h2 className="mb-5 text-2xl font-medium">Required Folder Structure</h2>

            <div className="overflow-x-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              <pre className="text-sm leading-7 text-zinc-300">
{`registry/
└ hero-sections/
  └ clipped-hero/
    ├ clipped-hero.tsx
    ├ preview.tsx
    ├ preview.mp4
    ├ meta.ts
    └ components/
      ├ button.tsx
      ├ navbar.tsx
      └ glow-card.tsx`}
              </pre>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              <h2 className="mb-5 text-2xl font-medium">Naming Rules</h2>

              <ul className="space-y-4 text-zinc-400 leading-7">
                <li className="flex gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Use lowercase kebab-case only.</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Component folder name and main component name must match.</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>No spaces, uppercase, or random naming.</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Keep all local UI inside the component folder.</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Do not use global button.tsx or card.tsx files.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
                <h2 className="mb-5 text-2xl font-medium">Preview Rules</h2>

                <p className="text-zinc-300 leading-7">Every component MUST include at least one preview:</p>

                <ul className="mt-5 space-y-4 text-zinc-400 leading-7">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                    <span>preview.mp4</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                    <span>preview image URL</span>
                  </li>
                </ul>

                <p className="mt-6 text-red-400">Pull requests without previews will be rejected immediately.</p>
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
                <h2 className="mb-5 text-2xl font-medium">Media Rules</h2>

                <ul className="space-y-4 text-zinc-400 leading-7">
                  <li className="flex gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-amber-400" />
                    <span>Do not store large images or videos inside public folders.</span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-amber-400" />
                    <span>Use external hosted URLs only.</span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-amber-400" />
                    <span>Use optimized mp4 previews whenever possible.</span>
                  </li>
                  <li className="flex gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-amber-400" />
                    <span>Keep preview sizes lightweight.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-2xl font-medium">Performance Rules</h2>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              <ul className="space-y-4 text-zinc-400 leading-7">
                <li className="flex gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-violet-400" />
                  <span>Showcase pages must use lightweight previews only.</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-violet-400" />
                  <span>Full live rendering happens only on component pages.</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-violet-400" />
                  <span>Heavy shaders, particles, or WebGL should never run in grids.</span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-violet-400" />
                  <span>Use dynamic imports for large components.</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-2xl font-medium">Example meta.ts</h2>

            <div className="overflow-x-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              <pre className="text-sm leading-7 text-zinc-300">
{`export const meta = {
  name: "clipped-hero",
  title: "Clipped Hero",
  description: "Modern animated hero section",
  preview:
    "https://your-cdn.com/previews/clipped-hero.mp4",
  dependencies: [
    "framer-motion"
  ]
}`}
              </pre>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Ready to submit</p>
                <h3 className="mt-2 text-xl font-medium">Use this format for consistent registry entries.</h3>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
              >
                Open registry
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}