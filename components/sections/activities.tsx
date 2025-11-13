"use client"

import { Calendar, Users, Award } from "lucide-react"

export default function Activities() {
  const activities = [
    {
      date: "Oktober 2025",
      title: "Sosialisasi Edukasi Sampah Kosmetik",
      description:
        "Kegiatan edukasi di sekolah dan komunitas untuk meningkatkan kesadaran masyarakat akan pentingnya memilah sampah kosmetik.",
      icon: Award,
      color: "from-primary/10 to-primary/5",
      borderColor: "border-primary",
    },
    {
      date: "September 2025",
      title: "Program Pengumpulan Empties",
      description:
        "Pengumpulan kemasan kosong (empties) di titik-titik drop box yang kami sediakan bersama mitra brand kecantikan.",
      icon: Users,
      color: "from-secondary/10 to-secondary/5",
      borderColor: "border-secondary",
    },
    {
      date: "Agustus 2025",
      title: "Kolaborasi Daur Ulang",
      description:
        "Bekerja sama dengan pihak pengolah limbah untuk mendaur ulang kemasan yang terkumpul menjadi produk baru yang bermanfaat.",
      icon: Calendar,
      color: "from-accent/10 to-accent/5",
      borderColor: "border-accent",
    },
  ]

  return (
    <section id="activities" className="section-spacing bg-card">
      <div className="container-custom space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-foreground">Kegiatan Kami</h2>
          <p className="text-foreground/70 text-lg">
            Program berkelanjutan yang dirancang untuk menciptakan dampak positif bagi lingkungan dan masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-gradient-to-br ${activity.color} border-l-4 ${activity.borderColor} hover:shadow-lg transition-all`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className={activity.borderColor} />
                  </div>
                  <span className="text-sm font-medium text-foreground/60">{activity.date}</span>
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3">{activity.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{activity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
