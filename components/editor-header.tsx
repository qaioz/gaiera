"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Lock, Share, Eye, Plus, Settings } from "lucide-react"
import Link from "next/link"

interface EditorHeaderProps {
  projectId: string
}

export function EditorHeader({ projectId }: EditorHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* User Avatar */}
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
            G
          </div>

          {/* All Projects Button */}
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              All Projects
            </Link>
          </Button>

          {/* Project URL */}
          <div className="flex items-center space-x-2 bg-gray-100 rounded-md px-3 py-1">
            <Lock className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">www.shashki-1947.widgera.app</span>
          </div>

          {/* Share and View buttons */}
          <Button variant="outline" size="sm">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          {/* Project Tabs */}
          <Tabs defaultValue="hackathons1" className="w-auto">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="hackathons1" className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
                  H
                </div>
                <span>Hackathons</span>
              </TabsTrigger>
              <TabsTrigger value="hackathons2" className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
                  H
                </div>
                <span>Hackathons</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4" />
          </Button>

          {/* Publish Button */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Publish</Button>
        </div>
      </div>
    </header>
  )
}
