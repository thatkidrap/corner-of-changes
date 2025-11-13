"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Lokasi", href: "#maps" },
    { label: "Kegiatan", href: "#activities" },
    { label: "Kontak", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">C</span>
            </div>
            <span className="font-serif font-bold text-xl hidden sm:inline text-foreground">Corner of Changes</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden sm:block btn-primary text-sm">
              Hubungi Kami
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Modern Popup */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <button
              className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
              onClick={() => setIsOpen(false)}
              onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
              aria-label="Close menu"
            />
            
            {/* Popup Menu */}
            <div className="fixed top-16 right-4 left-4 md:hidden z-50 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="bg-card border border-border rounded-3xl p-6 shadow-2xl backdrop-blur-xl space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-3 text-foreground font-medium hover:bg-primary/10 hover:text-primary rounded-2xl transition-all duration-200 active:scale-95"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Divider */}
                <div className="h-px bg-border/40 my-2" />
                
                <Link 
                  href="#contact" 
                  className="block btn-primary text-center rounded-2xl font-medium transition-all duration-200 active:scale-95"
                  onClick={() => setIsOpen(false)}
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}
