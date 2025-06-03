"use client"

import { useState } from "react"

export function EditorSidebar() {
  const [selectedProject] = useState("shashki")

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-blue-600 font-bold">S</span>
        </div>
        <span className="font-semibold text-gray-900">Shashki</span>
      </div>

      {/* Additional sidebar content can be added here */}
    </div>
  )
}
