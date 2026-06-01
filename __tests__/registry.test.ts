import { describe, it, expect } from "vitest"
import { registryItems } from "@/content/registry/items"
import { registryLoaders } from "@/content/registry/loaders"

describe("Registry", () => {
  it("should have loaders for every registry item", () => {
    registryItems.forEach((item) => {
      expect(registryLoaders[item.slug]).toBeDefined()
    })
  })

  it("should have glsl-hills-hero registered", () => {
    expect(registryLoaders["glsl-hills-hero"]).toBeDefined()
  })

  it("should have demo loader for glsl-hills-hero", () => {
    const loader = registryLoaders["glsl-hills-hero"]?.demo
    expect(loader).toBeDefined()
    expect(typeof loader).toBe("function")
  })

  it("should resolve component slugs from items", () => {
    const itemSlugs = registryItems.map((item) => item.slug)
    const loaderSlugs = Object.keys(registryLoaders)
    expect(loaderSlugs.sort()).toEqual(itemSlugs.sort())
  })

  it("should handle missing component gracefully", () => {
    const missingLoader = registryLoaders["non-existent-component"]
    expect(missingLoader).toBeUndefined()
  })
})
