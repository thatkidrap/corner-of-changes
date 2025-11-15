import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12">
          {/* Information & Stats */}
          <div className="col-span-1 flex flex-col xs:flex-col sm:flex-row gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            {/* Information */}
            <div className="flex-1 min-w-0">
              <h4 className="font-serif font-semibold text-xs xs:text-sm sm:text-base md:text-lg mb-2 xs:mb-3 sm:mb-4 text-white">Informasi</h4>
              <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-3.5 text-[11px] xs:text-xs sm:text-sm">
                <li className="flex gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 text-white">
                  <MapPin size={14} className="shrink-0 mt-0.5 text-white" />
                  <span className="leading-snug text-[11px] xs:text-xs sm:text-sm">Jl. Universitas Brawijaya, Ketawanggede, Kec. Lowokwaru, Kota Malang</span>
                </li>
                <li className="flex gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 text-white">
                  <Mail size={14} className="shrink-0 mt-0.5 text-white" />
                  <span className="text-[11px] xs:text-xs sm:text-sm">cornerofchange@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Stats */}
            <div className="flex-1 min-w-0">
              <h4 className="font-serif font-semibold text-xs xs:text-sm sm:text-base md:text-lg mb-2 xs:mb-3 sm:mb-4 text-white">Pencapaian</h4>
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <div>
                  <div className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white">2025</div>
                  <p className="text-white text-[11px] xs:text-xs sm:text-sm">Tahun Didirikan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-serif font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 text-white">Menu</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="#home" className="text-white hover:text-white/80 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white hover:text-white/80 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#maps" className="text-white hover:text-white/80 transition-colors">
                  Lokasi
                </Link>
              </li>
              <li>
                <Link href="#activities" className="text-white hover:text-white/80 transition-colors">
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white hover:text-white/80 transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 sm:pt-8 md:pt-10">
          <div className="flex flex-col xs:flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-white">
            <p className="order-2 sm:order-1 text-xs sm:text-sm">&copy; {currentYear} Corner of Change. All rights reserved.</p>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 order-1 sm:order-2 w-full sm:w-auto text-xs sm:text-sm">
              <Link href="#" className="text-white hover:text-white/80 transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="text-white hover:text-white/80 transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
