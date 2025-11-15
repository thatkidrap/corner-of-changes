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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 md:mb-12 px-4 sm:px-0">
          {/* Contact Info */}
          <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail size={24} className="text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-lg">Email</h3>
            <p className="text-foreground/70 text-sm sm:text-base break-words">cornerofchange@gmail.com</p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border space-y-4">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <MapPin size={24} className="text-secondary" />
            </div>
            <h3 className="font-serif font-semibold text-lg">Lokasi</h3>
            <p className="text-foreground/70 text-sm sm:text-base">Jl. Universitas Brawijaya, Ketawanggede, Kec. Lowokwaru, Kota Malang </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Send size={24} className="text-accent" />
            </div>
            <h3 className="font-serif font-semibold text-lg">Follow Us</h3>
            <p className="text-foreground/70 text-sm sm:text-base">@cornerofchange</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-card rounded-2xl p-6 sm:p-8 md:p-12 border border-border">
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
    </section>
  )
}
