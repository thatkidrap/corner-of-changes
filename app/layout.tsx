import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import "@/app/globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Corner of Changes",
  description: "Pengelolaan Limbah Kosmetik Berkelanjutan",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: "light",
  themeColor: "#0f766e",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
