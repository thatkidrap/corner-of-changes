import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import VisionMission from "@/components/sections/vision-mission"
import Activities from "@/components/sections/activities"
import Contact from "@/components/sections/contact"
import Maps from "@/components/sections/maps"

export const metadata = {
  title: "Corner of Changes | Pengelolaan Limbah Kosmetik Berkelanjutan",
  description:
    "Fasilitator pengumpulan limbah B3 ringan dari produk kosmetik. Mewujudkan masyarakat sadar lingkungan melalui gerakan kecil menuju perubahan besar.",
  keywords: "limbah kosmetik, daur ulang, sustainability, lingkungan, green initiative",
  authors: [{ name: "Corner of Changes" }],
  openGraph: {
    title: "Corner of Changes | Pengelolaan Limbah Kosmetik Berkelanjutan",
    description: "Fasilitator pengumpulan limbah B3 ringan dari produk kosmetik.",
    url: "https://cornerofchanges.org",
    type: "website",
    icons: {
      icon: "/trash-bin.svg",
      shortcut: "/trash-bin.svg",
      apple: "/trash-bin.svg",
    }
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <VisionMission />
      <Maps />
      <Activities />
      <Contact />
    </main>
  )
}
