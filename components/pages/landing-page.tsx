"use client"

import { Header } from "@/components/layout/header"
import { FullPageScroll } from "@/components/ui/full-page-scroll"
import { HeroSection } from "@/components/sections/hero-section"
import { CommunitySection } from "@/components/sections/community-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { Footer } from "@/components/layout/footer"

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FullPageScroll>
          <HeroSection />
          <CommunitySection />
          <FeaturesSection />
        </FullPageScroll>
      </main>
      <Footer />
    </div>
  )
}
