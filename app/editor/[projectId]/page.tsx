import { EditorCanvas } from "@/components/editor-canvas"
import { EditorHeader } from "@/components/editor-header"
import { EditorSidebar } from "@/components/editor-sidebar"

export const metadata = {
  title: "Editor - GaiEra",
  description: "Edit your website with the drag-and-drop editor.",
}

interface EditorPageProps {
  params: {
    projectId: string
  }
}

export default function EditorPage({ params }: EditorPageProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <EditorHeader projectId={params.projectId} />
      <div className="flex-1 flex">
        <EditorSidebar />
        <main className="flex-1">
          <EditorCanvas />
        </main>
      </div>
    </div>
  )
}
