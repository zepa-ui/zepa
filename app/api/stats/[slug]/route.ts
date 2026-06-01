import { handleGetStats } from "@/lib/stats/api"

interface RouteContext {
  params: Promise<{ slug: string }>
}

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params
  return handleGetStats(slug)
}
