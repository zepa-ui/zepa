import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Docs",
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
