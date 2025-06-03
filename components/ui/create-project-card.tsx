"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"

interface CreateProjectCardProps {
  onClick: () => void
}

export function CreateProjectCard({ onClick }: CreateProjectCardProps) {
  return (
    <Card
      className="border-2 border-dashed border-gray-300 hover:border-gray-400 cursor-pointer transition-colors"
      onClick={onClick}
    >
      <CardContent className="flex flex-col items-center justify-center h-48 p-6">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Plus className="h-6 w-6 text-gray-400" />
        </div>
        <p className="text-gray-600 font-medium">Create new project</p>
      </CardContent>
    </Card>
  )
}
