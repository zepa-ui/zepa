import { registryItems, type RegistryItem } from "@/content/registry/items"

export type { RegistryItem }

export function getRegistryItem(slug: string) {
  return registryItems.find((item) => item.slug === slug)
}

export function getAllSlugs() {
  return registryItems.map((item) => item.slug)
}

export function getInstallCommand(dependencies: string[]) {
  if (dependencies.length === 0) return null
  return `npm install ${dependencies.join(" ")}`
}
