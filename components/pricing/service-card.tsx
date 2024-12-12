"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PriceDisplay } from "./price-display"

interface ServiceCardProps {
  name: string
  price: number
  features: string[]
  isPopular?: boolean
  isSelected?: boolean
  onSelect: () => void
}

export function ServiceCard({ 
  name, 
  price, 
  features, 
  isPopular, 
  isSelected,
  onSelect 
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className={cn(
        "relative transition-colors",
        isPopular && "border-primary shadow-lg",
        isSelected && "bg-primary/5 border-primary"
      )}>
        {isPopular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
              Most Popular
            </span>
          </div>
        )}
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>
            <span className="text-2xl font-bold">
              <PriceDisplay value={price} />
            </span>/month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className={cn(
                  "h-4 w-4",
                  isSelected ? "text-primary" : "text-muted-foreground"
                )} />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            variant={isSelected ? "default" : isPopular ? "default" : "outline"}
            onClick={onSelect}
          >
            {isSelected ? "Selected" : "Select Plan"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}