import { FeatureCard } from "@/components/ui/feature-card"
import { Smartphone, Zap, Settings, Info } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Smartphone,
      title: "Create Mobile App",
      description: "Create and publish your Mobile App to App store & Play store.",
      color: "blue" as const,
      showIcons: ["🍎", "🤖"],
    },
    {
      icon: Zap,
      title: "Feel power of Superapp",
      description:
        "Effortlessly drag and drop functionalities such as eShop, Booking, Events, and more, equipped with built-in payments.",
      color: "red" as const,
      showIcons: ["🛒", "📅"],
    },
    {
      icon: Info,
      title: "About GaiEra",
      description:
        "GaiEra is a platform that empowers users to easily create personalized digital experiences. Its mission is to bring superpowers to digital presence creation.",
      color: "purple" as const,
      showButton: true,
    },
    {
      icon: Settings,
      title: "Ultimate Customisation",
      description:
        "Powerful customization from simple panel: easily tailor layout, features, colors, themes, pop-up cards, and more.",
      color: "green" as const,
    },
  ]

  return (
    <section className="bg-gray-100 h-full flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Why to use GaiEra</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
