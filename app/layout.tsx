import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const basePath = process.env.NODE_ENV === "production" ? "/cduabc" : ""

const withBasePath = (path: string) => `${basePath}${path}`

export const metadata: Metadata = {
  title: "LCD-FC",
  description:
    "Programa académico de Licenciatura en Ciencia de Datos. Conoce nuestro programa, académicos, estudiantes y oportunidades de investigación.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: withBasePath("/apple-icon.png"),
        media: "(prefers-color-scheme: light)",
      },
      {
        url: withBasePath("/apple-icon.png"),
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: withBasePath("/favicon.ico"),
      },
    ],
    apple: withBasePath("/apple-icon.png"),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}