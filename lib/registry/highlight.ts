import { codeToHtml } from "shiki"

const languageMap: Record<string, string> = {
  tsx: "tsx",
  ts: "typescript",
  jsx: "jsx",
  js: "javascript",
  mjs: "javascript",
  cjs: "javascript",
  css: "css",
  scss: "scss",
  json: "json",
  md: "markdown",
  mdx: "mdx",
  html: "html",
  glsl: "glsl",
}

function getLanguageFromFilename(filename: string) {
  const extension = filename.split(".").pop()?.toLowerCase()
  return languageMap[extension ?? ""] ?? "text"
}

export type HighlightedCodeFile = {
  raw: string
  html: string
}

export async function highlightCodeFile(
  code: string,
  filename: string
): Promise<HighlightedCodeFile> {
  const lang = getLanguageFromFilename(filename)

  const html = await codeToHtml(code, {
    lang,
    theme: "one-dark-pro",
  })

  return { raw: code, html }
}

export async function highlightCodeFiles(
  files: Record<string, string>
): Promise<Record<string, HighlightedCodeFile>> {
  const entries = await Promise.all(
    Object.entries(files).map(async ([filename, code]) => [
      filename,
      await highlightCodeFile(code, filename),
    ])
  )

  return Object.fromEntries(entries)
}
