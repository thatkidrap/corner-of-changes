"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Lokasi", href: "#maps" },
    { label: "Kegiatan", href: "#activities" },
    { label: "Kontak", href: "#contact" },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-xl border-0 py-2" 
        : "bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border py-0"
    }`}>
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? "mx-4 sm:mx-6 lg:mx-auto rounded-2xl px-6 py-3 max-w-6xl border border-primary/30 bg-background/90 shadow-lg" 
          : "container-custom"
      }`}>
        <div className="flex items-center justify-between py-4 flex-wrap md:flex-nowrap gap-3 md:gap-0">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 min-w-0" aria-label="Corner of Changes - Home">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src="/trash-bin.svg" alt="Corner of Changes Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif font-bold text-base sm:text-lg lg:text-xl text-foreground">Corner of Change</span>
              {/* Static tagline for small screens (hidden on md+) */}
              <span className="mt-0.5 hidden sm:block md:hidden text-[11px] sm:text-xs text-foreground/70 leading-snug max-w-56 truncate" title="Creative Governance Model for Campus-Based Waste Management at FISIP Universitas Brawijaya">
                Creative Governance Model for Campus-Based Waste Management at FISIP Universitas Brawijaya
              </span>
              {/* Running marquee for md+ */}
              <div className="marquee-container mt-1 hidden md:block max-w-64 lg:max-w-[360px]" aria-hidden>
                <div className="marquee text-[10px] sm:text-[11px] md:text-xs lg:text-sm text-primary/70">
                  Creative Governance Model for Campus-Based Waste Management at FISIP Universitas Brawijaya.
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
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
            <Link href="#contact" className="hidden lg:block btn-primary text-sm">
              Hubungi Kami
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-controls="mobile-nav"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
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
            <div id="mobile-nav" className="fixed top-16 right-4 left-4 md:hidden z-50 animate-in fade-in slide-in-from-top-2 duration-300">
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