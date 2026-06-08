/**
 * Resolves TMDB API key across runtimes:
 * - Next.js: NEXT_PUBLIC_TMDB_API_KEY (read in client components)
 * - Vite: VITE_TMDB_API_KEY via import.meta.env
 */
export function resolveTmdbApiKey(explicit?: string): string {
  if (explicit) return explicit

  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_TMDB_API_KEY) {
    return process.env.NEXT_PUBLIC_TMDB_API_KEY
  }

  if (typeof import.meta !== "undefined" && "env" in import.meta) {
    const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> })
      .env
    if (env?.VITE_TMDB_API_KEY) return env.VITE_TMDB_API_KEY
  }

  return ""
}
