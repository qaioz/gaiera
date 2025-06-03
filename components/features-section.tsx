import { Smartphone, Zap, Settings, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Smartphone className="h-6 w-6 text-blue-500" />,
      title: "Create Mobile App",
      description: "Create and publish your Mobile App to App store & Play store.",
      color: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: <Zap className="h-6 w-6 text-red-500" />,
      title: "Feel power of Superapp",
      description:
        "Effortlessly drag and drop functionalities such as eShop, Booking, Events, and more, equipped with built-in payments.",
      color: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      icon: <Info className="h-6 w-6 text-purple-500" />,
      title: "About GaiEra",
      description:
        "GaiEra is a platform that empowers users to easily create personalized digital experiences. Its mission is to bring superpowers to digital presence creation, adapting content to user behavior, making every interaction unique and engaging.",
      color: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      icon: <Settings className="h-6 w-6 text-green-500" />,
      title: "Ultimate Customisation",
      description:
        "Powerful customization from simple panel: easily tailor layout, features, colors, themes, pop-up cards, and more.",
      color: "bg-green-50",
      iconColor: "text-green-500",
    },
  ]

  return (
    <section className="bg-gray-100 h-full flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Why to use GaiEra</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.color} p-6 rounded-lg`}>
              <div className="mb-4">{feature.icon}</div>
              <h3 className={`text-lg font-bold mb-2 ${feature.iconColor}`}>{feature.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
              {index === 1 && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-xs">🛒</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-xs">📅</span>
                  </div>
                </div>
              )}
              {index === 2 && (
                <Button className="bg-purple-500 hover:bg-purple-600 text-white mt-4">
                  Try Alpha Now - it&apos;s free
                </Button>
              )}
              {index === 0 && (
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-xs">🍎</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-xs">🤖</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
