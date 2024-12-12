import { formatPrice } from "@/lib/utils/format"

interface PriceDisplayProps {
  value: number
  className?: string
}

export function PriceDisplay({ value, className }: PriceDisplayProps) {
  return (
    <span className={className}>
      ${formatPrice(value)}
    </span>
  )
}