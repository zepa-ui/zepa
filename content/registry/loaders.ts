import type { ComponentType } from "react"

type DemoModule = { default: ComponentType }

export const registryLoaders: Record<
  string,
  {
    demo: () => Promise<DemoModule>
  }
> = {
  "glsl-hills-hero": {
    demo: () => import("./hero-sections/glsl-hills-hero/demo"),
  },
  "placeholder-card": {
    demo: () => Promise.resolve({ default: () => null }),
  },
  "placeholder-button": {
    demo: () => Promise.resolve({ default: () => null }),
  },
}
