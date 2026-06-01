import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Components",
}

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
