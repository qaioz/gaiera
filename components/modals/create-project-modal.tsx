"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { useProjectStore } from "@/stores/project-store"
import { useUIStore } from "@/stores/ui-store"

export function CreateProjectModal() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  })

  const { createProject } = useProjectStore()
  const { setCreateProjectModalOpen } = useUIStore()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    if (formData.name.trim()) {
      createProject(formData)
      setCreateProjectModalOpen(false)
      setFormData({ name: "", description: "" })
    }
  }

  const handleClose = () => {
    setCreateProjectModalOpen(false)
    setFormData({ name: "", description: "" })
  }

  return (
    <div className="space-y-6">
      <DialogHeader>
        <div className="flex items-center justify-between">
          <DialogTitle className="text-xl font-semibold">Add New Project</DialogTitle>
          <DialogClose className="h-6 w-6 rounded-full hover:bg-gray-100" onClick={handleClose}>
            <X className="h-4 w-4" />
          </DialogClose>
        </div>
      </DialogHeader>

      <div className="space-y-4">
        <Input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className="h-12"
        />

        <Textarea
          placeholder="Description or Industry"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          className="min-h-[100px] resize-none"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white"
          disabled={!formData.name.trim()}
        >
          Create Project
        </Button>
      </div>
    </div>
  )
}
