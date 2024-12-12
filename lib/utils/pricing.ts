import { SERVICES, MULTI_SERVICE_DISCOUNT } from '../constants'
import { ServiceSelection, PricingCalculation } from '../types/services'
import { formatPrice } from './format'

export function calculateTotal(selections: ServiceSelection[]): PricingCalculation {
  // Calculate subtotal with proper type checking
  const subtotal = selections.reduce((sum, { serviceId, tierId }) => {
    const service = SERVICES[serviceId]
    const tier = service.tiers[tierId]
    return sum + tier.price
  }, 0)

  // Calculate discount and round to nearest hundredth
  const discountAmount = selections.length > 1 
    ? Math.round(subtotal * MULTI_SERVICE_DISCOUNT * 100) / 100 
    : 0

  // Calculate total and round to nearest hundredth
  const total = Math.round((subtotal - discountAmount) * 100) / 100

  return {
    subtotal: Number(formatPrice(subtotal)),
    discount: Number(formatPrice(discountAmount)),
    total: Number(formatPrice(total))
  }
}