"use client"

import { ProjectCard } from "@/components/ui/project-card"
import { CreateProjectCard } from "@/components/ui/create-project-card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { CreateProjectModal } from "@/components/modals/create-project-modal"
import { useProjectStore } from "@/stores/project-store"
import { useUIStore } from "@/stores/ui-store"

export function ProjectGrid() {
  const { projects, deleteProject } = useProjectStore()
  const { isCreateProjectModalOpen, setCreateProjectModalOpen } = useUIStore()

  const handleProjectAction = (projectId: string, action: string) => {
    switch (action) {
      case "delete":
        deleteProject(projectId)
        break
      case "edit":
        // Navigate to editor
        window.location.href = `/editor/${projectId}`
        break
      case "duplicate":
        // Implement duplication logic
        console.log("Duplicate project:", projectId)
        break
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <CreateProjectCard onClick={() => setCreateProjectModalOpen(true)} />

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onAction={handleProjectAction} />
        ))}
      </div>

      <Dialog open={isCreateProjectModalOpen} onOpenChange={setCreateProjectModalOpen}>
        <DialogContent className="sm:max-w-md">
          <CreateProjectModal />
        </DialogContent>
      </Dialog>
    </>
  )
}
