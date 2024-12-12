"use client"

import { HeroContent } from "./hero-content"
import { HeroFeatures } from "./hero-features"

export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden bg-gradient-to-b from-background to-muted">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(0deg,transparent,black)]" />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <HeroContent />
          <HeroFeatures />
        </div>
      </div>
    </section>
  )
}