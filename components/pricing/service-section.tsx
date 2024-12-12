"use client"

import { motion } from "framer-motion"
import { SERVICES } from "@/lib/constants"
import { ServiceCard } from "./service-card"
import { cn } from "@/lib/utils"
import { ServiceId, TierId, isValidServiceId, isValidTierId } from "@/lib/types/services"

interface ServiceSectionProps {
  serviceId: keyof typeof SERVICES
  selectedTierId?: string | null
  onSelect: (tierId: string) => void
}

export function ServiceSection({ serviceId, selectedTierId, onSelect }: ServiceSectionProps) {
  // Type assertion since we know serviceId is valid from the props type
  const service = SERVICES[serviceId as ServiceId]

  const handleSelect = (tierId: string) => {
    if (isValidTierId(tierId)) {
      onSelect(tierId)
    } else {
      console.error(`Invalid tier ID: ${tierId}`)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-xl p-8 transition-colors",
        selectedTierId && "bg-muted"
      )}
    >
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
        <p className="text-muted-foreground">{service.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {(Object.entries(service.tiers) as [TierId, typeof service.tiers[TierId]][]).map(([tierId, tier]) => (
          <ServiceCard
            key={tierId}
            name={tier.name}
            price={tier.price}
            features={tier.features}
            isPopular={tierId === "STANDARD"}
            isSelected={tierId === selectedTierId}
            onSelect={() => handleSelect(tierId)}
          />
        ))}
      </div>
    </motion.div>
  )
}