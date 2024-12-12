// components/Features.tsx

import { Truck, Clock, Recycle, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    title: "Same-Day Delivery",
    description: "Get fresh towels delivered to your salon within hours of ordering",
    icon: Truck,
  },
  {
    title: "24/7 Service",
    description: "Round-the-clock support and delivery scheduling",
    icon: Clock,
  },
  {
    title: "Eco-Friendly",
    description: "Sustainable practices and environmentally conscious cleaning",
    icon: Recycle,
  },
  {
    title: "Quality Guaranteed",
    description: "Premium quality towels and satisfaction guarantee",
    icon: Shield,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose TowelDash?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide premium towel delivery services tailored to your salon's needs.
            Experience the convenience of professional towel management.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
