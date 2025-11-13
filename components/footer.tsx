import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="font-serif font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white">Corner of Changes</h3>
            <p className="text-white text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              Fasilitator pengelolaan limbah kosmetik berkelanjutan untuk masa depan yang lebih baik.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 sm:col-span-1">
            <h4 className="font-serif font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">Menu</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
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
            <h4 className="font-serif font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">Informasi</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex gap-2 sm:gap-3 text-white">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 sm:mt-1 text-white" />
                <span className="leading-snug">Jl. Universitas Brawijaya , Ketawanggede, Kec. Lowokwaru, Kota Malang</span>
              </li>
              <li className="flex gap-2 sm:gap-3 text-white">
                <Mail size={14} className="flex-shrink-0 mt-0.5 sm:mt-1 text-white" />
                <span>cornerofchanges@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="col-span-1 sm:col-span-1">
            <h4 className="font-serif font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">Pencapaian</h4>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">2025</div>
                <p className="text-white text-xs sm:text-sm">Tahun Didirikan</p>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                <p className="text-white text-xs sm:text-sm">Relawan Aktif</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-white">
            <p className="order-2 sm:order-1">&copy; {currentYear} Corner of Changes. All rights reserved.</p>
            <div className="flex flex-wrap gap-3 sm:gap-6 order-1 sm:order-2 w-full sm:w-auto">
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
