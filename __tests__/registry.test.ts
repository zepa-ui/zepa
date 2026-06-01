import { describe, it, expect } from "vitest"
import { registryLoaders } from "@/content/registry/loaders"

describe("Registry", () => {
  it("should have loaders for all registered components", () => {
    expect(Object.keys(registryLoaders).length).toBeGreaterThan(0)
  })

  it("should have glsl-hills-hero registered", () => {
    expect(registryLoaders["glsl-hills-hero"]).toBeDefined()
  })

  it("should have demo loader for glsl-hills-hero", () => {
    const loader = registryLoaders["glsl-hills-hero"]?.demo
    expect(loader).toBeDefined()
    expect(typeof loader).toBe("function")
  })

  it("should resolve component slugs correctly", () => {
    const slugs = Object.keys(registryLoaders)
    expect(slugs).toContain("glsl-hills-hero")
    expect(slugs).toContain("placeholder-card")
    expect(slugs).toContain("placeholder-button")
  })

  it("should handle missing component gracefully", () => {
    const missingLoader = registryLoaders["non-existent-component"]
    expect(missingLoader).toBeUndefined()
  })
})
