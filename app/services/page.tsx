"use client"

import { useState } from "react"
import { SERVICES } from "@/lib/constants"
import { useServiceSelection } from "@/lib/hooks/use-service-selection"
import { ServiceSection } from "@/components/pricing/service-section"
import { PricingSummary } from "@/components/pricing/pricing-summary"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactFormData } from "@/lib/types/contact"

export default function ServicesPage() {
  const { selections, handleServiceSelect, pricing } = useServiceSelection()
  const [showContactForm, setShowContactForm] = useState(false)

  const getSelectedTierId = (serviceId: keyof typeof SERVICES) => {
    const selection = selections.find(s => s.serviceId === serviceId)
    return selection?.tierId || null
  }

  const handleConfirmSelection = () => {
    setShowContactForm(true)
  }

  const handleContactSubmit = (data: ContactFormData) => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', { selections, pricing, contact: data })
  }

  if (showContactForm) {
    return (
      <main className="min-h-screen pt-20 pb-16">
        <div className="container px-4 mx-auto">
          <ContactForm
            onSubmit={handleContactSubmit}
            onBack={() => setShowContactForm(false)}
          />
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Choose Your Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select multiple services and save 10% on your entire order
          </p>
        </div>

        <div className="space-y-24">
          {(Object.keys(SERVICES) as Array<keyof typeof SERVICES>).map((serviceId) => (
            <ServiceSection
              key={serviceId}
              serviceId={serviceId}
              selectedTierId={getSelectedTierId(serviceId)}
              onSelect={(tierId) => handleServiceSelect(serviceId, tierId)}
            />
          ))}
        </div>

        {selections.length > 0 && (
          <PricingSummary
            pricing={pricing}
            onConfirm={handleConfirmSelection}
          />
        )}
      </div>
    </main>
  )
}