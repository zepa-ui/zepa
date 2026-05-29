// components/showcase/preview-frame.tsx

export default function PreviewFrame({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
      {children}
    </div>
  )
}