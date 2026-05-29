import { BookOpen, Layers, FileText, Hash, Video, Zap, Cpu, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <Navbar />
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 flex items-start justify-between gap-6">
          <div className="flex-1">
            <p className="mb-3 text-sm text-zinc-500">Contributing Guide</p>
            <h1 className="text-4xl font-semibold tracking-tight">Adding Components</h1>
            <p className="mt-4 max-w-2xl text-lg text-zinc-400">Follow the structure strictly. Components with incorrect naming, missing previews, broken imports, or bad organization will not be accepted.</p>
          </div>

          <div className="hidden sm:flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
              <CheckCircle className="h-4 w-4 text-emerald-400" /> Quality checks
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
              <Video className="h-4 w-4 text-amber-400" /> Preview required
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
              <Layers className="h-4 w-4 text-violet-400" /> Organized structure
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Accepted patterns */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium"><BookOpen className="h-5 w-5 text-emerald-400"/> Accepted patterns</h2>
            <p className="text-zinc-400 leading-7">Keep local UI inside the component folder and avoid global helpers. Every component should be isolated and portable.</p>
          </section>

          {/* Required Folder Structure */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium"><FileText className="h-5 w-5 text-emerald-400"/> Required Folder Structure</h2>
            <div className="overflow-x-auto">
              <pre className="text-sm text-zinc-300 leading-7">{`registry/
└ hero-sections/
  └ clipped-hero/
    ├ clipped-hero.tsx
    ├ clipped-hero-demo.tsx
    ├ clipped-hero-docs.mdx
    ├ meta.ts
    ├ preview.mp4
    └ ui/
      ├ button.tsx
      ├ navbar.tsx
      └ glow-card.tsx`}</pre>
            </div>
          </section>

          {/* Naming Rules */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium"><Hash className="h-5 w-5 text-cyan-400"/> Naming Rules</h2>
            <ul className="space-y-3 text-zinc-400 leading-7">
              <li className="flex items-start gap-3"><Zap className="mt-1 h-4 w-4 text-amber-400"/> Use lowercase kebab-case only.</li>
              <li className="flex items-start gap-3"><FileText className="mt-1 h-4 w-4 text-emerald-400"/> Component folder name and main component name must match.</li>
              <li className="flex items-start gap-3"><Cpu className="mt-1 h-4 w-4 text-violet-400"/> No spaces, uppercase, or random naming.</li>
              <li className="flex items-start gap-3"><Layers className="mt-1 h-4 w-4 text-violet-400"/> Keep all local UI inside the component folder.</li>
              <li className="flex items-start gap-3"><BookOpen className="mt-1 h-4 w-4 text-emerald-400"/> Do not use global button.tsx or card.tsx files.</li>
            </ul>
          </section>

          {/* Preview Rules */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium"><Video className="h-5 w-5 text-amber-400"/> Preview Rules</h2>
            <p className="text-zinc-300 leading-7">Every component MUST include at least one preview:</p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li>• preview.mp4</li>
              <li>• preview image URL</li>
            </ul>
            <p className="mt-4 text-red-400">Pull requests without previews will be rejected immediately.</p>
          </section>

          {/* Media Rules */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-medium"><Layers className="h-5 w-5 text-violet-400"/> Media Rules</h2>
            <ul className="space-y-3 text-zinc-400 leading-7">
              <li>• Do not store large images or videos inside public folders.</li>
              <li>• Use external hosted URLs only.</li>
              <li>• Use optimized mp4 previews whenever possible.</li>
              <li>• Keep preview sizes lightweight.</li>
            </ul>
          </section>

          {/* Performance Rules */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-medium"><BookOpen className="h-5 w-5 text-emerald-400"/> Performance Rules</h2>
            <ul className="space-y-3 text-zinc-400 leading-7">
              <li>• Showcase pages must use lightweight previews only.</li>
              <li>• Full live rendering happens only on component pages.</li>
              <li>• Heavy shaders, particles, or WebGL should never run in grids.</li>
              <li>• Use dynamic imports for large components.</li>
            </ul>
          </section>

          {/* Meta Example */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-medium"><FileText className="h-5 w-5 text-emerald-400"/> Example meta.ts</h2>
            <div className="overflow-x-auto">
              <pre className="text-sm text-zinc-300 leading-7">{`export const meta = {
  name: "clipped-hero",
  title: "Clipped Hero",
  description: "Modern animated hero section",

  preview:
    "https://your-cdn.com/previews/clipped-hero.mp4",

  category: "hero-sections",

  dependencies: [
    "framer-motion"
  ],

  creator: "sameer",
}`}</pre>
            </div>
          </section>

          {/* Registry UI & Examples */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-medium"><Layers className="h-5 w-5 text-violet-400"/> Registry Examples</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                <h4 className="text-sm font-medium">Example registry-ui.ts</h4>
                <pre className="mt-2 text-sm text-zinc-300">{`{
  name: "clipped-hero",
  type: "registry:ui",
  files: [ ... ]
}`}</pre>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                <h4 className="text-sm font-medium">Example registry-examples.ts</h4>
                <pre className="mt-2 text-sm text-zinc-300">{`{
  name: "clipped-hero-demo",
  files: [ ... ]
}`}</pre>
              </div>
            </div>
          </section>

          {/* Build */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 text-2xl font-medium"><FileText className="h-5 w-5 text-emerald-400"/> Build Registry</h2>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
              <pre className="text-sm text-zinc-300">{`pnpm build:registry`}</pre>
            </div>
          </section>

          {/* Footer */}
          <section className="pt-6">
            <h2 className="text-2xl font-medium">Ready to submit</h2>
            <p className="mt-4 max-w-2xl leading-8 text-zinc-400">Use this exact format for clean registry entries, scalable previews, and maintainable component architecture.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}