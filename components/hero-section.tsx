"use client"

import { Button } from "@/components/ui/button"
import { Zap, Sliders, Layers } from "lucide-react"

export default function HeroSection() {
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
              <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                <Zap className="h-4 w-4 text-indigo-500" />
                <span className="text-sm">Fast</span>
              </div>
              <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                <Layers className="h-4 w-4 text-indigo-500" />
                <span className="text-sm">Simple</span>
              </div>
              <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                <Sliders className="h-4 w-4 text-indigo-500" />
                <span className="text-sm">Customizable</span>
              </div>
            </div>
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6">Try Now - it&apos;s free</Button>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="GaiEra Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
