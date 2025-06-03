"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"

interface CreateProjectModalProps {
  onClose: () => void
}

export function CreateProjectModal({ onClose }: CreateProjectModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    language: "",
    description: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = () => {
    console.log("Creating project:", formData)
    // Implement project creation logic
    onClose()
  }

  const languages = [
    { value: "en", label: "English" },
    { value: "ka", label: "Georgian" },
    { value: "ru", label: "Russian" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "es", label: "Spanish" },
  ]

  return (
    <div className="space-y-6">
      <DialogHeader>
        <div className="flex items-center justify-between">
          <DialogTitle className="text-xl font-semibold">Add New Project</DialogTitle>
          <DialogClose className="h-6 w-6 rounded-full hover:bg-gray-100">
            <X className="h-4 w-4" />
          </DialogClose>
        </div>
      </DialogHeader>

      <div className="space-y-4">
        {/* Project Name */}
        <div className="space-y-2">
          <Input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="h-12"
          />
        </div>

        {/* Project Language */}
        <div className="space-y-2">
          <Select value={formData.language} onValueChange={(value) => handleInputChange("language", value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Project Language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                  {language.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Project Description */}
        <div className="space-y-2">
          <Textarea
            placeholder="Description or Industry"
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            className="min-h-[100px] resize-none"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} className="bg-gray-200 hover:bg-gray-300 text-gray-800">
          Add Company
        </Button>
      </div>
    </div>
  )
}
