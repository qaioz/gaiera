"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Trash2, Settings, Move } from "lucide-react"

interface TextWidgetProps {
  id: string
  content: { text: string }
  isSelected: boolean
  onUpdate: (content: { text: string }) => void
  onDelete: () => void
  onMouseDown: (e: React.MouseEvent, widgetId: string, action: "move" | "resize") => void
}

export function TextWidget({ id, content, isSelected, onUpdate, onDelete, onMouseDown }: TextWidgetProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(content.text)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus()
      textareaRef.current.select()
    }
  }, [isEditing])

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsEditing(true)
  }

  const handleBlur = () => {
    setIsEditing(false)
    onUpdate({ text })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleBlur()
    }
    if (e.key === "Escape") {
      setText(content.text)
      setIsEditing(false)
    }
  }

  const handleControlClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation()
    action()
  }

  return (
    <div className="relative w-full h-full group">
      {/* Widget Controls */}
      {isSelected && !isEditing && (
        <>
          {/* Top Controls */}
          <div className="absolute -top-2 -right-2 flex space-x-1 z-20">
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-gray-800 hover:bg-gray-700 text-white rounded-full"
              onClick={(e) => handleControlClick(e, onDelete)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0 bg-gray-800 hover:bg-gray-700 text-white rounded-full"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>

          {/* Move Handle */}
          <div
            className="move-handle"
            onMouseDown={(e) => onMouseDown(e, id, "move")}
            onClick={(e) => e.stopPropagation()}
          >
            <Move className="h-4 w-4 text-white" />
          </div>

          {/* Resize Handles */}
          <div
            className="resize-handle resize-handle-se"
            onMouseDown={(e) => onMouseDown(e, id, "resize")}
            onClick={(e) => e.stopPropagation()}
          />
          <div
            className="resize-handle resize-handle-sw"
            onMouseDown={(e) => onMouseDown(e, id, "resize")}
            onClick={(e) => e.stopPropagation()}
          />
        </>
      )}

      {/* Text Content */}
      <div className="w-full h-full p-4">
        {isEditing ? (
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="w-full h-full resize-none border-none outline-none bg-transparent text-gray-700 font-medium"
            style={{ minHeight: "100%" }}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <div
            className="w-full h-full text-gray-700 font-medium cursor-text flex items-center"
            onDoubleClick={handleDoubleClick}
          >
            {text || "Click to edit text"}
          </div>
        )}
      </div>
    </div>
  )
}
