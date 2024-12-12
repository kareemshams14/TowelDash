import { SERVICES } from '../constants'

export type ServiceId = keyof typeof SERVICES
export type TierId = keyof typeof SERVICES.TOWELS.tiers

export interface ServiceTier {
  name: string
  price: number
  features: string[]
}

export interface ServiceSelection {
  serviceId: ServiceId
  tierId: TierId
}

export interface PricingCalculation {
  subtotal: number
  discount: number
  total: number
}

// Type guard for ServiceId
export function isValidServiceId(id: string): id is ServiceId {
  return id in SERVICES
}

// Type guard for TierId
export function isValidTierId(id: string): id is TierId {
  return id === "BASIC" || id === "STANDARD" || id === "PREMIUM"
}

// Type guard for ServiceSelection
export function isValidServiceSelection(selection: {
  serviceId: string
  tierId: string
}): selection is ServiceSelection {
  return isValidServiceId(selection.serviceId) && isValidTierId(selection.tierId)
}