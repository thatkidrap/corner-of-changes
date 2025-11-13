import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-6 sm:py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="font-serif font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-white">Corner of Changes</h3>
            <p className="text-white text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Fasilitator pengelolaan limbah kosmetik berkelanjutan untuk masa depan yang lebih baik.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 sm:col-span-1">
            <h4 className="font-serif font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 text-white">Menu</h4>
            <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm">
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

          {/* Information */}
          <div className="col-span-1 sm:col-span-1">
            <h4 className="font-serif font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 text-white">Informasi</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex gap-2 sm:gap-2.5 text-white">
                <MapPin size={12} className="flex-shrink-0 mt-0.5 text-white" />
                <span className="leading-tight break-words text-xs sm:text-sm">Jl. Universitas Brawijaya, Ketawanggede, Kec. Lowokwaru, Kota Malang</span>
              </li>
              <li className="flex gap-2 sm:gap-2.5 text-white">
                <Mail size={12} className="flex-shrink-0 mt-0.5 text-white" />
                <span className="text-xs sm:text-sm">cornerofchanges@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="col-span-1 sm:col-span-1">
            <h4 className="font-serif font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 text-white">Pencapaian</h4>
            <div className="space-y-2 sm:space-y-3">
              <div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">2025</div>
                <p className="text-white text-xs sm:text-sm">Tahun Didirikan</p>
              </div>
              <div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">50+</div>
                <p className="text-white text-xs sm:text-sm">Relawan Aktif</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-4 sm:pt-6">
          <div className="flex flex-col xs:flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-white">
            <p className="order-2 sm:order-1 text-xs">&copy; {currentYear} Corner of Changes. All rights reserved.</p>
            <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 order-1 sm:order-2 w-full sm:w-auto text-xs sm:text-sm">
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
