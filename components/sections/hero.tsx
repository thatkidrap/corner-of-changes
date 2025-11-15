"use client"

import Link from "next/link"
import { ArrowRight, Leaf } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "let's make change happen together."
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [scrollOpacity, setScrollOpacity] = useState(0.2)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTypingComplete(true)
        clearInterval(typingInterval)
      }
    }, 80) // Adjust speed here (lower = faster)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const heroHeight = windowHeight * 0.9 // 90vh
      
      // Calculate opacity based on scroll position
      // Opacity decreases as we scroll down
      const scrollProgress = Math.min(scrollPosition / heroHeight, 1)
      const newOpacity = Math.max(0.2 - (scrollProgress * 0.2), 0)
      
      setScrollOpacity(newOpacity)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center pt-20 bg-background text-foreground relative overflow-hidden"
    >
      {/* Background Image with Scroll-based Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 ease-out"
        style={{
          backgroundImage: 'url(/bg-hero.jpg)',
          opacity: scrollOpacity,
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/30" />
      
      {/* Content */}
      <div className="container-custom w-full relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12 md:space-y-16">
            {/* Top Label */}
            <div className="flex items-center justify-center gap-2 text-primary font-medium text-sm sm:text-base">
              <Leaf size={20} className="sm:w-6 sm:h-6" />
              <span>Gerakan Keberlanjutan</span>
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Title */}
              <div className="space-y-4 text-center lg:text-left order-1 lg:order-1">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  Glad you're here.
                </h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-primary min-h-[1.2em] flex items-center">
                  <span className="inline-block">
                    {displayedText}
                    {!isTypingComplete && (
                      <span className="animate-pulse text-primary">|</span>
                    )}
                  </span>
                </h2>
              </div>

              {/* Right Description */}
              <div className="text-center lg:text-left order-2 lg:order-2">
                <p className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify">
                  Corner of Change adalah inisiatif mahasiswa FISIP Universitas Brawijaya untuk menciptakan sistem
                  pengelolaan empties wadah kosong kosmetik dan produk perawatan tubuh yang aman, mudah, dan ramah
                  lingkungan.
                  <br /><br />
                  Melalui fasilitas pengumpulan empties, sistem pelaporan digital berbasis QR, dan kolaborasi lintas
                  pihak, kami berupaya membangun budaya peduli lingkungan sebagai aksi nyata bersama di setiap sudut
                  perubahan.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Link href="#activities" className="btn-primary inline-flex items-center justify-center text-base font-medium px-8 py-4">
                <span>Lihat Kegiatan</span>
                <ArrowRight size={20} className="ml-3" />
              </Link>
              <Link href="#about" className="btn-outline inline-flex items-center justify-center text-base font-medium px-8 py-4">
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 pt-12 max-w-3xl mx-auto lg:mx-0">
              <div className="space-y-2 text-center lg:text-left">
                <p className="text-3xl sm:text-4xl font-bold text-primary font-serif">Developed by</p>
                <p className="text-foreground/60 text-sm sm:text-base font-medium">Kelompok Kewirausahaan Politik</p>
              </div>
              <div className="space-y-2 text-center lg:text-left">
                <p className="text-3xl sm:text-4xl font-bold text-primary font-serif">2025</p>
                <p className="text-foreground/60 text-sm sm:text-base font-medium">Tahun Didirikan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
