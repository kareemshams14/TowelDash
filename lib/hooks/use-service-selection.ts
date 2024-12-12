"use client"

import { useState } from "react"
import { ServiceId, ServiceSelection, TierId, isValidServiceId, isValidTierId } from "../types/services"
import { calculateTotal } from "../utils/pricing"

export function useServiceSelection() {
  const [selections, setSelections] = useState<ServiceSelection[]>([])

  const handleServiceSelect = (serviceId: string, tierId: string) => {
    // Validate inputs using type guards
    if (!isValidServiceId(serviceId)) {
      console.error(`Invalid service ID: ${serviceId}`)
      return
    }

    if (!isValidTierId(tierId)) {
      console.error(`Invalid tier ID: ${tierId}`)
      return
    }

    // Now TypeScript knows these are valid IDs
    const validServiceId: ServiceId = serviceId
    const validTierId: TierId = tierId

    setSelections(prev => {
      const existing = prev.findIndex(s => s.serviceId === validServiceId)
      if (existing !== -1) {
        const newSelections = [...prev]
        newSelections[existing] = { serviceId: validServiceId, tierId: validTierId }
        return newSelections
      }
      return [...prev, { serviceId: validServiceId, tierId: validTierId }]
    })
  }

  const pricing = calculateTotal(selections)

  return {
    selections,
    handleServiceSelect,
    pricing
  }
}