import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Ready to Transform Your Salon's Towel Management?
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Join hundreds of satisfied salons who trust TowelDash for their towel needs.
          Start your journey to effortless towel management today.
        </p>
        <Button size="lg" variant="secondary" className="text-lg" asChild>
          <Link href="/services">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}