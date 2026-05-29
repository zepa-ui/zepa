// components/registry/preview-renderer.tsx

export default function PreviewRenderer({
  slug,
}: {
  slug: string
}) {
  switch (slug) {
    default:
      return (
        <div className="flex h-[400px] items-center justify-center text-muted-foreground">
          Preview not found
        </div>
      )
  }
} 