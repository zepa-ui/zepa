import { readFile } from "fs/promises"
import path from "path"

import { codePaths } from "./code-paths"

export async function getComponentCode(
  slug: string
): Promise<Record<string, string>> {
  const files = codePaths[slug]
  if (!files) return {}

  const base = path.join(process.cwd(), "content/registry")

  const entries = await Promise.all(
    files.map(async (file) => [
      path.basename(file),
      await readFile(path.join(base, file), "utf-8"),
    ])
  )

  return Object.fromEntries(entries)
}
