"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Camera, Edit, X, User, Calendar, Users, Phone, Mail } from "lucide-react"
import { useAuthStore } from "@/stores/auth-store"
import { useUIStore } from "@/stores/ui-store"

export function AccountModal() {
  const { user, updateUser } = useAuthStore()
  const { setAccountModalOpen } = useUIStore()
  const [editingField, setEditingField] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "Tabatadze",
    lastName: user?.lastName || "Gaioz",
    email: user?.email || "tabatadzegaga@gmail.com",
    phone: user?.phone || "+1 (555) 987-6543",
    birthday: user?.birthday || "April 7, 1994",
    gender: user?.gender || "Male",
  })

  const handleEdit = (field: string) => {
    console.log(`Editing field: ${field}`)
    setEditingField(field)
  }

  const handleSave = (field: string) => {
    console.log(`Saving field: ${field} with value: ${formData[field as keyof typeof formData]}`)
    updateUser({ [field]: formData[field as keyof typeof formData] })
    setEditingField(null)
  }

  const handleCancel = () => {
    console.log("Canceling edit")
    setFormData({
      firstName: user?.firstName || "Tabatadze",
      lastName: user?.lastName || "Gaioz",
      email: user?.email || "tabatadzegaga@gmail.com",
      phone: user?.phone || "+1 (555) 987-6543",
      birthday: user?.birthday || "April 7, 1994",
      gender: user?.gender || "Male",
    })
    setEditingField(null)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleClose = () => {
    setAccountModalOpen(false)
    setEditingField(null)
  }

  const handleProfilePictureClick = () => {
    console.log("Profile picture clicked - would open file picker")
    // Add file upload logic here
  }

  // Use mock data if user is not available
  const displayUser = user || {
    firstName: "Tabatadze",
    lastName: "Gaioz",
    email: "tabatadzegaga@gmail.com",
    phone: "+1 (555) 987-6543",
    birthday: "April 7, 1994",
    gender: "Male",
    avatar: "G",
  }

  return (
    <div className="space-y-6">
      <DialogHeader>
        <div className="flex items-center justify-between">
          <DialogTitle className="text-xl font-semibold flex items-center space-x-2">
            <User className="h-5 w-5 text-blue-500" />
            <span>Account</span>
          </DialogTitle>
          <DialogClose className="h-6 w-6 rounded-full hover:bg-gray-100" onClick={handleClose}>
            <X className="h-4 w-4" />
          </DialogClose>
        </div>
      </DialogHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Profile Picture and Basic Info */}
        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-4xl">
                {displayUser.avatar || displayUser.firstName?.charAt(0) || "U"}
              </div>
              <button
                onClick={handleProfilePictureClick}
                className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                <Camera className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* First Name */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">First name</span>
              </div>
              {editingField !== "firstName" && (
                <button onClick={() => handleEdit("firstName")}>
                  <Edit className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            {editingField === "firstName" ? (
              <div className="flex space-x-2">
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="flex-1"
                />
                <Button size="sm" onClick={() => handleSave("firstName")}>
                  Save
                </Button>
                <Button size="sm" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            ) : (
              <div className="font-medium">{displayUser.firstName}</div>
            )}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Last name</span>
              </div>
              {editingField !== "lastName" && (
                <button onClick={() => handleEdit("lastName")}>
                  <Edit className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            {editingField === "lastName" ? (
              <div className="flex space-x-2">
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="flex-1"
                />
                <Button size="sm" onClick={() => handleSave("lastName")}>
                  Save
                </Button>
                <Button size="sm" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            ) : (
              <div className="font-medium">{displayUser.lastName}</div>
            )}
          </div>
        </div>

        {/* Right Column - Contact Info */}
        <div className="space-y-6">
          {/* Birthday */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-gray-600">Birthday</span>
              </div>
              {editingField !== "birthday" && (
                <button onClick={() => handleEdit("birthday")}>
                  <Edit className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            {editingField === "birthday" ? (
              <div className="flex space-x-2">
                <Input
                  value={formData.birthday}
                  onChange={(e) => handleInputChange("birthday", e.target.value)}
                  className="flex-1"
                />
                <Button size="sm" onClick={() => handleSave("birthday")}>
                  Save
                </Button>
                <Button size="sm" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            ) : (
              <div className="font-medium">{displayUser.birthday}</div>
            )}
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-purple-500" />
                <span className="text-sm text-gray-600">Gender</span>
              </div>
              {editingField !== "gender" && (
                <button onClick={() => handleEdit("gender")}>
                  <Edit className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            {editingField === "gender" ? (
              <div className="flex space-x-2">
                <Input
                  value={formData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="flex-1"
                />
                <Button size="sm" onClick={() => handleSave("gender")}>
                  Save
                </Button>
                <Button size="sm" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            ) : (
              <div className="font-medium">{displayUser.gender}</div>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-gray-600">Phone</span>
              </div>
              {editingField !== "phone" && (
                <button onClick={() => handleEdit("phone")}>
                  <Edit className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            {editingField === "phone" ? (
              <div className="flex space-x-2">
                <Input
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="flex-1"
                />
                <Button size="sm" onClick={() => handleSave("phone")}>
                  Save
                </Button>
                <Button size="sm" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            ) : (
              <div className="font-medium">{displayUser.phone}</div>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-gray-600">Email</span>
              </div>
              {editingField !== "email" && (
                <button onClick={() => handleEdit("email")}>
                  <Edit className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            {editingField === "email" ? (
              <div className="flex space-x-2">
                <Input
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="flex-1"
                />
                <Button size="sm" onClick={() => handleSave("email")}>
                  Save
                </Button>
                <Button size="sm" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            ) : (
              <div className="font-medium">{displayUser.email}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
