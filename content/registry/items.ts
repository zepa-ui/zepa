import { meta as glslHillsHero } from "./hero-sections/glsl-hills-hero/meta"

export const registryItems = [
  {
    ...glslHillsHero,
    slug: "glsl-hills-hero",
  },
  {
    name: "placeholder-card",
    title: "Placeholder Card",
    description: "Coming soon",
    category: "cards",
    preview: "/previews/placeholder.mov",
    dependencies: [] as string[],
    tags: [],
    creator: "zepa",
    version: "1.0.0",
    slug: "placeholder-card",
  },
  {
    name: "placeholder-button",
    title: "Placeholder Button",
    description: "Coming soon",
    category: "buttons",
    preview: "/previews/placeholder.mov",
    dependencies: [] as string[],
    tags: [],
    creator: "zepa",
    version: "1.0.0",
    slug: "placeholder-button",
  },
] as const
