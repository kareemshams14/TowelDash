"use client"

import { Shield, Truck } from "lucide-react"

export function HeroFeatures() {
  return (
    <div className="flex-1 relative">
      <div className="relative w-full aspect-square">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
        <div className="relative bg-background rounded-3xl shadow-2xl p-8 border">
          <div className="grid grid-cols-2 gap-4">
            <FeatureCard
              icon={Truck}
              title="Fast Delivery"
              description="Same-day service available"
            />
            <FeatureCard
              icon={Shield}
              title="Quality First"
              description="Premium materials only"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2 p-4 rounded-lg bg-muted/50">
      <Icon className="h-8 w-8 text-primary" />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}