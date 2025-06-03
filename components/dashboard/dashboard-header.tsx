"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DashboardHeader() {
  const projects = [
    { id: "shashki", name: "Shashki", initial: "S" },
    { id: "hackathons1", name: "Hackathons", initial: "H" },
    { id: "hackathons2", name: "Hackathos", initial: "H" },
  ]

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600 border-blue-200">
            <span className="mr-2">📋</span>
            All Projects
          </Button>
        </div>

        <Tabs defaultValue="shashki" className="w-auto">
          <TabsList className="bg-gray-100">
            {projects.map((project) => (
              <TabsTrigger key={project.id} value={project.id} className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
                  {project.initial}
                </div>
                <span>{project.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}
