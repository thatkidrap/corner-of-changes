"use client"

import { Eye, Target, Heart } from "lucide-react"

export default function VisionMission() {
  const items = [
    {
      icon: Eye,
      title: "Visi",
      description: "Mewujudkan masyarakat sadar lingkungan melalui pengelolaan limbah kosmetik berkelanjutan.",
      color: "from-primary/10 to-primary/5",
      accentColor: "text-primary",
    },
    {
      icon: Target,
      title: "Misi",
      description:
        "Menyediakan wadah pengumpulan limbah kosmetik, mengedukasi masyarakat, dan bekerja sama dengan brand kecantikan.",
      color: "from-secondary/10 to-secondary/5",
      accentColor: "text-secondary",
    },
    {
      icon: Heart,
      title: "Nilai Kami",
      description: "Kolaborasi, Kepedulian, dan Keberlanjutan adalah fondasi setiap keputusan yang kami ambil.",
      color: "from-accent/10 to-accent/5",
      accentColor: "text-accent",
    },
  ]

  return (
    <section id="vision" className="section-spacing bg-background">
      <div className="container-custom space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-foreground">Visi, Misi & Nilai</h2>
          <p className="text-foreground/70 text-lg">
            Kami berkomitmen untuk menciptakan dampak positif melalui kolaborasi dan edukasi berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-gradient-to-br ${item.color} border border-border hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-6 ${item.accentColor}`}
                >
                  <Icon size={28} />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
