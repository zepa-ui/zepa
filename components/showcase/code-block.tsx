interface CodeBlockProps {
  html: string
}

export function CodeBlock({ html }: CodeBlockProps) {
  return (
    <div
      className="code-block scrollbar-hidden min-h-72 max-h-[32rem] overflow-auto rounded-lg border border-white/10 bg-zinc-950 text-xs leading-relaxed [&_.shiki]:bg-transparent! [&_.shiki]:p-4 [&_.shiki]:text-xs [&_.shiki]:leading-relaxed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
