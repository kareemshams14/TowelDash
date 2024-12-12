// Utility functions for formatting values
export function formatPrice(value: number): string {
  return (Math.round(value * 100) / 100).toFixed(2)
}

export function formatDiscount(value: number): string {
  return `${(value * 100).toFixed(0)}%`
}