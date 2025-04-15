import NavBar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import VideoCarousel from "@/components/video-carousel"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <VideoCarousel />
        <AboutSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

