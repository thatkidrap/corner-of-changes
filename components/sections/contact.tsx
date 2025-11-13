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
      <div className="container-custom space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-foreground">Hubungi Kami</h2>
          <p className="text-foreground/70 text-lg">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Hubungi kami sekarang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="p-8 rounded-2xl bg-card border border-border space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail size={24} className="text-primary" />
            </div>
            <h3 className="font-serif font-semibold">Email</h3>
            <p className="text-foreground/70">cornerofchanges@gmail.com</p>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border space-y-4">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <MapPin size={24} className="text-secondary" />
            </div>
            <h3 className="font-serif font-semibold">Lokasi</h3>
            <p className="text-foreground/70">Jl. Hijau Lestari No.15, Padang, Sumatera Barat</p>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border space-y-4">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Send size={24} className="text-accent" />
            </div>
            <h3 className="font-serif font-semibold">Follow Us</h3>
            <p className="text-foreground/70">@cornerofchanges</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
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
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
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
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
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
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>

            {submitMessage && (
              <div
                className={`p-4 rounded-lg ${submitMessage.includes("Terima") ? "bg-secondary/10 text-secondary" : "bg-red-100 text-red-600"}`}
              >
                {submitMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
