import { describe, it, expect } from "vitest"
import { readFileSync, existsSync } from "fs"
import path from "path"
import { registryItems } from "@/content/registry/items"

describe("shadcn registry JSON", () => {
  it("should generate a public/r json file for each component", () => {
    registryItems.forEach((item) => {
      const filePath = path.join(
        process.cwd(),
        "public/r",
        `${item.slug}.json`
      )
      expect(existsSync(filePath)).toBe(true)

      const json = JSON.parse(readFileSync(filePath, "utf-8"))
      expect(json.name).toBe(item.slug)
      expect(json.dependencies).toEqual(item.dependencies)
      expect(Array.isArray(json.files)).toBe(true)
      expect(json.files.length).toBeGreaterThan(0)
      expect(json.files[0]).toHaveProperty("content")
    })
  })
})
