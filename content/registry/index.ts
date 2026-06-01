import { registryItems } from "./items"
import { registryLoaders } from "./loaders"

export const registry = registryItems.map((item) => ({
  ...item,
  demo: registryLoaders[item.slug].demo,
}))

export { registryItems } from "./items"
export { registryLoaders } from "./loaders"
