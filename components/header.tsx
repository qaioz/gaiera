"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { LoginModal } from "@/components/login-modal"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8 rounded-full bg-black flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3L13 8L8 13L3 8L8 3Z" fill="white" />
            </svg>
          </div>
          <span className="font-bold text-xl">GaiEra</span>
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Sign In</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <LoginModal />
          </DialogContent>
        </Dialog>
      </div>
    </header>
  )
}
