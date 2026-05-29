import { meta as glslHillsHero } from "./hero-sections/glsl-hills-hero/meta"

export const registry = [
  {
    ...glslHillsHero,

    slug: "glsl-hills-hero",

    demo: () =>
      import("./hero-sections/glsl-hills-hero/demo"),
  },
  {
    name: "placeholder-card",
    title: "Placeholder Card",
    description: "Coming soon",
    category: "cards",
    preview: "/previews/placeholder.mov",
    dependencies: [],
    tags: [],
    creator: "zepa",
    version: "1.0.0",
    slug: "placeholder-card",
    demo: () => Promise.resolve({ default: () => null }),
  },
  {
    name: "placeholder-button",
    title: "Placeholder Button",
    description: "Coming soon",
    category: "buttons",
    preview: "/previews/placeholder.mov",
    dependencies: [],
    tags: [],
    creator: "zepa",
    version: "1.0.0",
    slug: "placeholder-button",
    demo: () => Promise.resolve({ default: () => null }),
  },
]