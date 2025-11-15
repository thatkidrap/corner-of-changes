"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitMessage("Terima kasih! Pesan Anda telah dikirim. Kami akan menghubungi Anda segera.")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitMessage(""), 5000)
    } catch (error) {
      setSubmitMessage("Terjadi kesalahan. Silakan coba lagi.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-spacing bg-background">
      <div className="container-custom space-y-8 md:space-y-12 lg:space-y-16">
        <div className="text-center space-y-3 md:space-y-4 max-w-2xl mx-auto px-4 sm:px-0">
          <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl">Hubungi Kami</h2>
          <p className="text-foreground/70 text-base sm:text-lg md:text-xl leading-relaxed">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Hubungi kami sekarang.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-foreground">Informasi Kontak</h3>
              <p className="text-foreground/70 text-base leading-relaxed">
                Jangan ragu untuk menghubungi kami. Tim kami siap membantu dan menjawab pertanyaan Anda.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-foreground/70 wrap-break-word">cornerofchange@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground">Lokasi</h4>
                  <p className="text-foreground/70">Jl. Universitas Brawijaya, Ketawanggede, Kec. Lowokwaru, Kota Malang</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Send size={24} className="text-accent" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground">Follow Us</h4>
                  <p className="text-foreground/70">@cornerofchange</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-semibold text-foreground">Kirim Pesan</h3>
                <p className="text-foreground/70">Isi form di bawah ini untuk mengirimkan pesan kepada kami.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">Nama</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary text-base"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary text-base"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Subjek</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary text-base"
                    placeholder="Subjek Pesan"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Pesan</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none text-base"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg text-sm sm:text-base ${submitMessage.includes("Terima") ? "bg-secondary/10 text-secondary" : "bg-red-100 text-red-600"}`}
                  >
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
