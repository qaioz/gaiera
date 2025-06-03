"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, FileText } from "lucide-react"

interface Project {
  id: string
  name: string
  initial: string
  lastEdited: string
  status: string
}

interface ProjectCardProps {
  project: Project
  onAction: (projectId: string, action: string) => void
}

export function ProjectCard({ project, onAction }: ProjectCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-lg font-bold text-gray-700">{project.initial}</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onAction(project.id, "edit")}>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onAction(project.id, "duplicate")}>Duplicate</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onAction(project.id, "delete")} className="text-red-600">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <h3 className="font-semibold text-gray-900 mb-2">{project.name}</h3>
        <p className="text-sm text-gray-500 mb-3">Edited {project.lastEdited}</p>

        <div className="flex items-center text-sm text-gray-500">
          <FileText className="h-4 w-4 mr-1" />
          <span>{project.status}</span>
        </div>
      </CardContent>
    </Card>
  )
}
