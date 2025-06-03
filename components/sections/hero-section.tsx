"use client"

import { Button } from "@/components/ui/button"
import { FeatureBadge } from "@/components/ui/feature-badge"
import { VideoDemo } from "@/components/ui/video-demo"
import { Zap, Layers, Sliders } from "lucide-react"

export function HeroSection() {
  const features = [
    { icon: Zap, label: "Fast" },
    { icon: Layers, label: "Simple" },
    { icon: Sliders, label: "Customizable" },
  ]

  return (
    <section className="bg-gray-50 h-full flex items-center">
      <div className="container mx-auto px-4 pt-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Create powerful
              <br />
              <span className="text-indigo-500">Website & App</span>
            </h1>

            <p className="text-lg text-gray-600">Perfectly without experience, no coding or design skills required</p>

            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <FeatureBadge key={index} icon={feature.icon} label={feature.label} />
              ))}
            </div>

            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6">Try Now - it&apos;s free</Button>
          </div>

          <VideoDemo />
        </div>
      </div>
    </section>
  )
}
