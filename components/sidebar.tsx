"use client"

import { Button } from "@/components/ui/button"
import { LayoutGrid, Bell } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-4">
      {/* User Avatar */}
      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
        G
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
