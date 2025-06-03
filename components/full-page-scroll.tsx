"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { useSwipeable } from "react-swipeable"

interface FullPageScrollProps {
  children: ReactNode[]
}

export default function FullPageScroll({ children }: FullPageScrollProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const sectionsRef = useRef<HTMLDivElement>(null)
  const timeout = useRef<NodeJS.Timeout | null>(null)

  const scrollToSection = (index: number) => {
    if (isScrolling || index < 0 || index >= children.length) return

    setIsScrolling(true)
    setCurrentSection(index)

    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setIsScrolling(false)
    }, 1000)
  }

  const handleWheel = (e: WheelEvent) => {
    if (isScrolling) return

    if (e.deltaY > 0) {
      scrollToSection(currentSection + 1)
    } else {
      scrollToSection(currentSection - 1)
    }
  }

  const handlers = useSwipeable({
    onSwipedUp: () => scrollToSection(currentSection + 1),
    onSwipedDown: () => scrollToSection(currentSection - 1),
    preventDefaultTouchmoveEvent: true,
  })

  useEffect(() => {
    const sectionElement = sectionsRef.current
    if (!sectionElement) return

    sectionElement.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      sectionElement.removeEventListener("wheel", handleWheel)
      if (timeout.current) clearTimeout(timeout.current)
    }
  }, [currentSection, isScrolling])

  return (
    <div ref={sectionsRef} className="h-screen overflow-hidden" {...handlers}>
      <div
        className="transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateY(-${currentSection * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="h-screen w-full">
            {child}
          </div>
        ))}
      </div>
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSection === index ? "bg-primary w-4 h-4" : "bg-gray-300"
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
