"use client"

import { CheckCircle2, Users, Target } from "lucide-react"

export default function About() {
  const points = [
    {
      icon: Target,
      title: "Misi Jelas",
      description: "Menyediakan wadah pengumpulan limbah kosmetik dengan edukasi dan kerjasama brand.",
    },
    {
      icon: Users,
      title: "Komunitas Solid",
      description: "Membangun gerakan bersama 50+ relawan yang peduli terhadap lingkungan.",
    },
    {
      icon: CheckCircle2,
      title: "Terbukti Efektif",
      description: "Program yang terukur dan memberikan dampak nyata untuk keberlanjutan.",
    },
  ]

  return (
    <section id="about" className="section-spacing bg-card">
      <div className="container-custom space-y-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-foreground">Tentang Kami</h2>
            <p className="text-foreground/70 leading-relaxed">
              Corner of Changes berdiri sebagai inisiatif sosial yang berfokus pada pengelolaan limbah kosmetik (B3
              ringan). Kami menyiapkan tempat sampah khusus untuk produk seperti botol skincare, lotion, hingga kemasan
              parfum.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Tujuan kami adalah menciptakan sistem pengumpulan yang mudah diakses dan ramah lingkungan. Kami percaya
              bahwa kesadaran masyarakat terhadap sampah kosmetik masih minim, dan dengan langkah kecil melalui gerakan
              ini, setiap individu dapat berkontribusi untuk menjaga keberlanjutan bumi.
            </p>
          </div>

          {/* Visual */}
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl font-serif text-primary/20">♻️</div>
                <p className="text-foreground/50 font-medium text-sm">Sistem Pengumpulan Berkelanjutan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon
            return (
              <div key={index} className="p-6 rounded-xl bg-background space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif font-semibold">{point.title}</h3>
                <p className="text-foreground/70 text-sm">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
