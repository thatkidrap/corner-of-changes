"use client"

import { Eye, Target, Heart } from "lucide-react"

export default function VisionMission() {
  const items = [
    {
      icon: Eye,
      title: "Visi",
      description: "Terwujudnya lingkungan FISIP UB yang bersih, aman, dan bebas pencemaran akibat limbah empties B3 melalui tata kelola kolaboratif yang berkelanjutan, sekaligus mewujudkan kesadaran atas lingkungan melalui pengelolaan limbah kosmetik secara bertanggung jawab dan berkelanjutan.",
      color: "from-primary/10 to-primary/5",
      accentColor: "text-primary",
    },
    {
      icon: Target,
      title: "Misi",
      description:
        "Membangun sistem pengelolaan empties B3 yang aman, terintegrasi, dan berkelanjutan melalui kolaborasi antara kampus, masyarakat, dan pemerintah untuk menciptakan lingkungan FISIP UB yang bersih serta mendorong kesadaran lingkungan yang bertanggung jawab.",
      color: "from-secondary/10 to-secondary/5",
      accentColor: "text-secondary",
    },
    {
      icon: Heart,
      title: "Nilai Kami",
      description: "Menjunjung tinggi tanggung jawab, kolaborasi, dan inovasi dalam mewujudkan pengelolaan empties B3 yang berkelanjutan, transparan, dan berorientasi pada kesadaran lingkungan.",
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
                <h3 className="font-serif font-bold text-xl mb-3 ">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-justify">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
