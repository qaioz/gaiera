"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LayoutGrid, Bell, Settings, CreditCard, Globe, ChevronRight, LogOut } from "lucide-react"
import { useAuthStore } from "@/stores/auth-store"
import { useUIStore } from "@/stores/ui-store"
import Link from "next/link"

export function Sidebar() {
  const { user, logout } = useAuthStore()
  const { setAccountModalOpen } = useUIStore()
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleProfileClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("Sidebar profile clicked, current isOpen:", isProfileMenuOpen)
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  const handleSettingsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("Sidebar settings clicked")
    setIsProfileMenuOpen(false)
    setAccountModalOpen(true)
  }

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("Sidebar logout clicked")
    setIsProfileMenuOpen(false)
    logout()
  }

  const handleMenuItemClick = (item: string) => {
    console.log(`Sidebar clicked ${item}`)
    setIsProfileMenuOpen(false)
  }

  return (
    <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-4 relative">
      {/* Logo - Back to Landing */}
      <Link href="/" className="mb-4 hover:scale-110 transition-transform duration-200">
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3L13 8L8 13L3 8L8 3Z" fill="white" />
          </svg>
        </div>
      </Link>

      {/* User Avatar with Dropdown */}
      <div className="relative mb-6" ref={menuRef}>
        <button
          onClick={handleProfileClick}
          className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg hover:bg-red-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer"
        >
          {user?.avatar || user?.firstName?.charAt(0) || "G"}
        </button>

        {isProfileMenuOpen && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black bg-opacity-10 z-40" onClick={() => setIsProfileMenuOpen(false)} />

            {/* Dropdown Menu */}
            <div
              className="absolute left-16 top-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
              style={{ zIndex: 9999 }}
            >
              {/* User Info */}
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {user?.avatar || user?.firstName?.charAt(0) || "G"}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {user?.firstName} {user?.lastName}
                      </div>
                      <div className="text-sm text-gray-500">{user?.email}</div>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100">
                <Button variant="ghost" size="sm" onClick={handleSettingsClick} className="hover:bg-blue-50 p-2">
                  <Settings className="h-4 w-4 text-blue-500" />
                </Button>
                <Button variant="ghost" size="sm" onClick={handleLogout} className="hover:bg-red-50 p-2">
                  <LogOut className="h-4 w-4 text-red-500" />
                </Button>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                <button
                  onClick={() => handleMenuItemClick("Payment & Billing")}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors"
                >
                  <CreditCard className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">Payment & Billing</span>
                </button>
                <button
                  onClick={() => handleMenuItemClick("Domains")}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors"
                >
                  <Globe className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">Domains</span>
                </button>
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-gray-100">
                <div className="text-xs text-gray-500">
                  GaiEra© 2024
                  <span className="mx-2">•</span>
                  <button className="hover:underline">Privacy</button>
                  <span className="mx-1">•</span>
                  <button className="hover:underline">Terms</button>
                  <span className="mx-1">•</span>
                  <button className="hover:underline">Advertising</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* All Projects Button */}
      <Button variant="ghost" size="sm" className="w-12 h-12 p-0 mb-4 bg-blue-100 hover:bg-blue-200">
        <LayoutGrid className="h-5 w-5 text-blue-600" />
      </Button>

      {/* Notifications */}
      <Button variant="ghost" size="sm" className="w-12 h-12 p-0">
        <Bell className="h-5 w-5 text-gray-400" />
      </Button>
    </div>
  )
}
