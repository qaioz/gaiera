"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, MoreVertical, FileText } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { CreateProjectModal } from "@/components/create-project-modal"
import Link from "next/link"

export function ProjectGrid() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const projects = [
    {
      id: "shashki",
      name: "Shashki",
      initial: "S",
      lastEdited: "5/31/2025",
      status: "Draft",
    },
    {
      id: "hackathons1",
      name: "Hackathons",
      initial: "H",
      lastEdited: "5/30/2025",
      status: "Draft",
    },
    {
      id: "hackathons2",
      name: "Hackathos",
      initial: "H",
      lastEdited: "5/20/2025",
      status: "Draft",
    },
  ]

  const handleCreateProject = () => {
    setIsCreateModalOpen(true)
  }

  const handleProjectAction = (projectId: string, action: string) => {
    console.log(`${action} project:`, projectId)
    // Implement project actions
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Create New Project Card */}
        <Card
          className="border-2 border-dashed border-gray-300 hover:border-gray-400 cursor-pointer transition-colors"
          onClick={handleCreateProject}
        >
          <CardContent className="flex flex-col items-center justify-center h-48 p-6">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Plus className="h-6 w-6 text-gray-400" />
            </div>
            <p className="text-gray-600 font-medium">Create new project</p>
          </CardContent>
        </Card>

        {/* Project Cards */}
        {projects.map((project) => (
          <Link key={project.id} href={`/editor/${project.id}`}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-700">{project.initial}</span>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleProjectAction(project.id, "edit")}>Edit</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleProjectAction(project.id, "duplicate")}>
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleProjectAction(project.id, "delete")}
                        className="text-red-600"
                      >
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
          </Link>
        ))}
      </div>

      {/* Create Project Modal */}
      <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <DialogContent className="sm:max-w-md">
          <CreateProjectModal onClose={() => setIsCreateModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  )
}
