"use client"

import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroContent() {
  return (
    <div className="flex-1 text-center lg:text-left">
      <div className="inline-flex items-center rounded-full border px-4 py-1.5 mb-6 text-sm">
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          Same-day delivery available
        </span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
        Premium Towel Service
        <br />
        <span className="text-primary">for Your Salon</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-xl mb-8">
        Experience hassle-free, same-day towel delivery service designed specifically for salons.
        Fresh, clean towels when you need them.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
        <Button size="lg" className="text-lg" asChild>
          <Link href="/services">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="text-lg" asChild>
          <Link href="#features">
            Learn More
          </Link>
        </Button>
      </div>
    </div>
  )
}