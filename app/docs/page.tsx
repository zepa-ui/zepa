import {
  BookOpen,
  Layers,
  FileText,
  Hash,
  Video,
  Zap,
  Cpu,
  CheckCircle,
  GitBranch,
  Terminal,
  AlertTriangle,
} from "lucide-react"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import {
  ContributorBuildFlow,
  ContributorGeneratedFlow,
  ContributorMainFlow,
} from "@/components/docs/contributor-flow"

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <Navbar />
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-start justify-between gap-6">
          <div className="flex-1">
            <p className="mb-3 text-sm text-zinc-500">Contributing Guide</p>
            <h1 className="text-4xl font-semibold tracking-tight">
              How to add a component
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-zinc-400">
              Only edit <code className="text-zinc-300">meta.ts</code> and your component
              source files. Run the registry build — the system generates everything
              else automatically.
            </p>
          </div>

          <div className="hidden flex-col gap-3 sm:flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
              <CheckCircle className="h-4 w-4 text-emerald-400" /> meta.ts only
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
              <Video className="h-4 w-4 text-amber-400" /> Preview required
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300">
              <Terminal className="h-4 w-4 text-violet-400" /> build:registry
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium">
              <GitBranch className="h-5 w-5 text-cyan-400" />
              Contributor flow
            </h2>
            <p className="mb-6 text-zinc-400 leading-7">
              Follow this path from a new folder to a live gallery card, detail page,
              and shadcn install URL.
            </p>
            <ContributorMainFlow />
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium">
              <Layers className="h-5 w-5 text-violet-400" />
              What you edit vs what is generated
            </h2>
            <p className="mb-6 text-zinc-400 leading-7">
              At 10, 100, or 1000 components the process stays the same — one{" "}
              <code className="text-zinc-300">meta.ts</code> per folder, then{" "}
              <code className="text-zinc-300">npm run build:registry</code>.
            </p>
            <ContributorGeneratedFlow />
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium">
              <Terminal className="h-5 w-5 text-violet-400" />
              Build → deploy → shadcn URL
            </h2>
            <p className="mb-6 text-zinc-400 leading-7">
              The install URL does not come from <code className="text-zinc-300">meta.ts</code>{" "}
              alone. The build script must generate{" "}
              <code className="text-zinc-300">public/r/[slug].json</code> and deploy it.
            </p>
            <ContributorBuildFlow />
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium">
              <FileText className="h-5 w-5 text-emerald-400" />
              Required folder structure
            </h2>
            <div className="overflow-x-auto">
              <pre className="text-sm leading-7 text-zinc-300">{`content/registry/
└ hero-sections/
  └ my-new-hero/              ← slug (folder name = meta.slug)
    ├ meta.ts                 ← YOU EDIT (single source of truth)
    ├ demo.tsx                ← YOU EDIT (live preview wrapper)
    └ ui/
      └ my-new-hero.tsx       ← YOU EDIT (component source)

public/previews/
└ hero-sections/
  └ my-new-hero/
    └ preview.mov             ← gallery video card`}</pre>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium">
              <BookOpen className="h-5 w-5 text-emerald-400" />
              Principles
            </h2>
            <p className="text-zinc-400 leading-7">
              Keep local UI inside the component folder. Every entry should be isolated,
              portable, and self-contained. Gallery uses lightweight video previews;
              the full React demo runs only on the detail page.
            </p>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium">
              <Hash className="h-5 w-5 text-cyan-400" />
              Naming rules
            </h2>
            <ul className="space-y-3 text-zinc-400 leading-7">
              <li className="flex items-start gap-3">
                <Zap className="mt-1 h-4 w-4 shrink-0 text-amber-400" />
                Use lowercase kebab-case only (e.g.{" "}
                <code className="text-zinc-300">glsl-hills-hero</code>).
              </li>
              <li className="flex items-start gap-3">
                <FileText className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                <code className="text-zinc-300">meta.slug</code> must match the folder
                name exactly.
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="mt-1 h-4 w-4 shrink-0 text-violet-400" />
                Routes use the slug:{" "}
                <code className="text-zinc-300">/components/[slug]</code> and{" "}
                <code className="text-zinc-300">/r/[slug].json</code>.
              </li>
              <li className="flex items-start gap-3">
                <Layers className="mt-1 h-4 w-4 shrink-0 text-violet-400" />
                Keep all UI files inside the component folder — no global copies.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium">
              <Video className="h-5 w-5 text-amber-400" />
              Preview rules
            </h2>
            <p className="text-zinc-300 leading-7">
              Every component must include a gallery preview video:
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li>
                • Path in meta:{" "}
                <code className="text-zinc-300">
                  /previews/&#123;category&#125;/&#123;slug&#125;/preview.mov
                </code>
              </li>
              <li>• Use optimized, lightweight .mov or .mp4 files</li>
              <li>• Cards without a preview are hidden from the gallery grid</li>
            </ul>
            <p className="mt-4 text-red-400">
              Pull requests without previews will be rejected.
            </p>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium">
              <Zap className="h-5 w-5 text-amber-400" />
              Performance rules
            </h2>
            <ul className="space-y-3 text-zinc-400 leading-7">
              <li>• Gallery grid shows video previews only — not live WebGL or heavy runtimes.</li>
              <li>• Full live rendering happens on the component detail page.</li>
              <li>• Use <code className="text-zinc-300">&quot;use client&quot;</code> on demos that use hooks, Three.js, or browser APIs.</li>
              <li>• Use dynamic imports inside demos when bundles are large.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium">
              <FileText className="h-5 w-5 text-emerald-400" />
              Example meta.ts
            </h2>
            <div className="overflow-x-auto">
              <pre className="text-sm leading-7 text-zinc-300">{`export const meta = {
  slug: "glsl-hills-hero",

  title: "GLSL Hills Hero",

  description:
    "Animated GLSL hills hero section powered by Three.js shaders.",

  category: "hero-sections",

  preview:
    "/previews/hero-sections/glsl-hills-hero/preview.mov",

  github: "vij-sameerb5",

  tags: [
    "hero",
    "glsl",
    "threejs",
    "shader",
    "animated",
  ],

  dependencies: ["three"],

  registryDependencies: [],

  version: 1,
} as const`}</pre>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
              Common mistakes
            </h2>
            <ul className="space-y-3 text-zinc-400 leading-7">
              <li>
                • <code className="text-zinc-300">meta.slug</code> does not match folder
                name → build fails or wrong route.
              </li>
              <li>• Missing <code className="text-zinc-300">demo.tsx</code> → “Demo not found” on detail page.</li>
              <li>• Missing preview video → card does not appear in gallery.</li>
              <li>
                • Forgetting <code className="text-zinc-300">npm run build:registry</code>{" "}
                → site still shows old registry.
              </li>
              <li>• Editing generated files by hand → overwritten on next build.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium">
              <Terminal className="h-5 w-5 text-violet-400" />
              Commands
            </h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                <p className="mb-2 text-xs uppercase tracking-wider text-zinc-500">
                  After adding or updating a component
                </p>
                <pre className="text-sm text-zinc-300">npm run build:registry</pre>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                <p className="mb-2 text-xs uppercase tracking-wider text-zinc-500">
                  Local development
                </p>
                <pre className="text-sm text-zinc-300">npm run dev</pre>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                <p className="mb-2 text-xs uppercase tracking-wider text-zinc-500">
                  Production build (runs registry build first)
                </p>
                <pre className="text-sm text-zinc-300">npm run build</pre>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                <p className="mb-2 text-xs uppercase tracking-wider text-zinc-500">
                  shadcn CLI (after deploy)
                </p>
                <pre className="text-sm text-zinc-300">{`npx shadcn@latest add https://zepadesign.netlify.app/r/glsl-hills-hero.json`}</pre>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-medium">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              Quick checklist
            </h2>
            <ul className="space-y-3 text-zinc-400 leading-7">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">1.</span>
                Create folder under <code className="text-zinc-300">content/registry/</code>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">2.</span>
                Add <code className="text-zinc-300">meta.ts</code>,{" "}
                <code className="text-zinc-300">demo.tsx</code>,{" "}
                <code className="text-zinc-300">ui/</code>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">3.</span>
                Add <code className="text-zinc-300">public/previews/.../preview.mov</code>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">4.</span>
                Run <code className="text-zinc-300">npm run build:registry</code>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">5.</span>
                Verify <code className="text-zinc-300">/components</code> and{" "}
                <code className="text-zinc-300">/components/[slug]</code>
              </li>
            </ul>
          </section>

          <section className="pt-6">
            <h2 className="text-2xl font-medium">Ready to submit</h2>
            <p className="mt-4 max-w-2xl leading-8 text-zinc-400">
              Follow this flow for clean registry entries, working shadcn install URLs,
              and a gallery that scales as Zepa grows.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
