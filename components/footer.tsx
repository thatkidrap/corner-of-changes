import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-2 text-white">Corner of Changes</h3>
            <p className="text-white text-sm mb-6">
              Fasilitator pengelolaan limbah kosmetik berkelanjutan untuk masa depan yang lebih baik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="text-white hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#activities" className="text-white hover:text-white transition-colors">
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Informasi</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 text-white">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-white" />
                <span>Jl. Universitas Brawijaya , Ketawanggede, Kec. Lowokwaru, Kota Malang</span>
              </li>
              <li className="flex gap-3 text-white">
                <Mail size={16} className="flex-shrink-0 mt-0.5 text-white" />
                <span>cornerofchanges@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Pencapaian</h4>
            <div className="space-y-4">
              <div>
                <div className="text-2xl font-bold text-white">2025</div>
                <p className="text-white text-sm">Tahun Didirikan</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <p className="text-white text-sm">Relawan Aktif</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white">
            <p>&copy; {currentYear} Corner of Changes. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-white hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="text-white hover:text-white transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
