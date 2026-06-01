import { handleIncrement } from "@/lib/stats/api"

interface RouteContext {
  params: Promise<{ slug: string }>
}

export async function POST(_request: Request, context: RouteContext) {
  const { slug } = await context.params
  return handleIncrement(slug, "likes")
}
