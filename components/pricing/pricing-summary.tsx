"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PricingCalculation } from "@/lib/types/services"
import { PriceDisplay } from "./price-display"
import { formatDiscount } from "@/lib/utils/format"
import { MULTI_SERVICE_DISCOUNT } from "@/lib/constants"

interface PricingSummaryProps {
  pricing: PricingCalculation
  onConfirm: () => void
}

export function PricingSummary({ pricing, onConfirm }: PricingSummaryProps) {
  const { subtotal, discount, total } = pricing

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-16"
    >
      <Card className="max-w-md mx-auto p-6">
        <h3 className="text-xl font-bold mb-4">Your Selection</h3>
        <div className="space-y-2 mb-6">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <PriceDisplay value={subtotal} />
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-primary">
              <span>Multi-service Discount ({formatDiscount(MULTI_SERVICE_DISCOUNT)})</span>
              <span>-<PriceDisplay value={discount} /></span>
            </div>
          )}
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total</span>
            <PriceDisplay value={total} className="text-xl" />
          </div>
        </div>
        <Button className="w-full" onClick={onConfirm}>
          Confirm Selection
        </Button>
      </Card>
    </motion.div>
  )
}