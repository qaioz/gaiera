import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out GaiEra",
      features: ["1 website", "Basic widgets", "Mobile responsive", "GaiEra branding", "Community support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For professionals and small businesses",
      features: [
        "5 websites",
        "All widgets",
        "Custom domain",
        "Remove branding",
        "Premium templates",
        "Priority support",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "For teams and larger businesses",
      features: [
        "Unlimited websites",
        "Team collaboration",
        "Advanced analytics",
        "Custom code injection",
        "API access",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section className="container py-24 sm:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the plan that's right for you and start building your website today
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg border ${plan.popular ? "border-primary shadow-lg" : ""} bg-background p-8`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
            )}
            <div className="mb-4">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
            </div>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full" variant={plan.popular ? "default" : "outline"}>
              <Link href={plan.popular ? "/signup" : "/contact"}>{plan.cta}</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
