"use client"

import Link from "next/link"
import { ArrowRight, Leaf } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-20">
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-medium">
                <Leaf size={20} />
                <span>Gerakan Keberlanjutan</span>
              </div>
              <h1 className="text-foreground">Selamat Datang di Corner of Changes</h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Kami merupakan fasilitator yang menyediakan wadah pengumpulan limbah B3 ringan, khususnya dari produk
                kosmetik seperti body care, skincare, dan parfum.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#activities" className="btn-primary">
                <span>Lihat Kegiatan</span>
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link href="#about" className="btn-outline">
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary font-serif">2024</p>
                <p className="text-foreground/70 text-sm">Tahun Didirikan</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary font-serif">50+</p>
                <p className="text-foreground/70 text-sm">Relawan Aktif</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Leaf size={40} className="text-primary" />
                </div>
                <p className="text-foreground/60 font-medium">Perubahan Besar Berawal dari Langkah Kecil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
