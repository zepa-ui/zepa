import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "zepa UI - UI Components",
  description: "The modern platform for UI components and libraries who ship fast. Built for scale, designed for speed.",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark preloading" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  if (window.location.pathname === '/') {
                    document.documentElement.classList.add('preloading');
                  } else {
                    document.documentElement.classList.remove('preloading');
                  }
                } catch (error) {
                  document.documentElement.classList.remove('preloading');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
