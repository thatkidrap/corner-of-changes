"use client"

import { CheckCircle2, Users, Target } from "lucide-react"

export default function About() {
  const points = [
    {
      icon: Target,
      title: "Collaboration Opportunities",
      description: "Kami mengundang NGO dan organisasi lingkungan untuk berkolaborasi memperluas kesadaran serta dampak inisiatif pengelolaan limbah yang bertanggung jawab.",
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl">Keunggulan Program Kami</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {points.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.title} className="p-4 sm:p-5 md:p-6 rounded-xl bg-background space-y-3 sm:space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={20} className="sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-sm sm:text-base">{point.title}</h3>
                <p className="text-foreground/70 text-xs sm:text-sm">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
