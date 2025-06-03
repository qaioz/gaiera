"use client"

import { useEffect, useRef, useCallback, type ReactNode } from "react"
import { useUIStore } from "@/stores/ui-store"

interface FullPageScrollProps {
  children: ReactNode[]
}

export function FullPageScroll({ children }: FullPageScrollProps) {
  const { currentSection, isScrolling, setCurrentSection, setIsScrolling } = useUIStore()
  const containerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartY = useRef<number>(0)

  const scrollToSection = useCallback(
    (index: number) => {
      if (isScrolling || index < 0 || index >= children.length) return

      setIsScrolling(true)
      setCurrentSection(index)

      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 1000)
    },
    [isScrolling, children.length, setIsScrolling, setCurrentSection],
  )

  // Handle wheel events
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (isScrolling) return

      const delta = e.deltaY
      if (Math.abs(delta) < 10) return

      if (delta > 0) {
        scrollToSection(currentSection + 1)
      } else {
        scrollToSection(currentSection - 1)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
      }
    }
  }, [currentSection, isScrolling, scrollToSection])

  // Handle touch events for mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return

      const touchEndY = e.changedTouches[0].clientY
      const diff = touchStartY.current - touchEndY

      if (Math.abs(diff) < 50) return

      if (diff > 0) {
        scrollToSection(currentSection + 1)
      } else {
        scrollToSection(currentSection - 1)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true })
      container.addEventListener("touchend", handleTouchEnd, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart)
        container.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [currentSection, isScrolling, scrollToSection])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault()
          scrollToSection(currentSection + 1)
          break
        case "ArrowUp":
        case "PageUp":
          e.preventDefault()
          scrollToSection(currentSection - 1)
          break
        case "Home":
          e.preventDefault()
          scrollToSection(0)
          break
        case "End":
          e.preventDefault()
          scrollToSection(children.length - 1)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSection, isScrolling, scrollToSection, children.length])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="h-screen overflow-hidden relative" style={{ touchAction: "none" }}>
      <div
        className="h-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
          height: `${children.length * 100}vh`,
        }}
      >
        {children.map((child, index) => (
          <div key={index} className="h-screen w-full flex-shrink-0" style={{ height: "100vh" }}>
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-3">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index ? "bg-indigo-500 w-4 h-4 shadow-lg" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to section ${index + 1}`}
              disabled={isScrolling}
            />
          ))}
        </div>
      </div>

      {/* Section indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {currentSection + 1} / {children.length}
        </div>
      </div>
    </div>
  )
}
