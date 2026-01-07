import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Smart Crop Advisory System",
  description: "AI-powered crop recommendation based on soil and weather conditions",
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <Footer />
    </main>
  )
}
