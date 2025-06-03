"use client"

import type React from "react"

import { useState, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { AddWidgetDialog } from "@/components/add-widget-dialog"
import { TextWidget } from "@/components/widgets/text-widget"
import { Plus, Smartphone, Tablet, Monitor, Undo, Redo } from "lucide-react"

interface Widget {
  id: string
  type: string
  content: any
  position: {
    x: number
    y: number
    width: number
    height: number
  }
}

interface GridPosition {
  x: number
  y: number
  width: number
  height: number
}

const GRID_SIZE = 20
const MIN_WIDGET_WIDTH = 200
const MIN_WIDGET_HEIGHT = 100

export function EditorCanvas() {
  const [widgets, setWidgets] = useState<Widget[]>([])
  const [isAddWidgetOpen, setIsAddWidgetOpen] = useState(false)
  const [selectedWidget, setSelectedWidget] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const canvasRef = useRef<HTMLDivElement>(null)

  const snapToGrid = (value: number) => Math.round(value / GRID_SIZE) * GRID_SIZE

  const handleAddWidget = useCallback((type: string) => {
    const newWidget: Widget = {
      id: `widget-${Date.now()}`,
      type,
      content: type === "text" ? { text: "Hello, this is text widget" } : {},
      position: {
        x: snapToGrid(100),
        y: snapToGrid(100),
        width: MIN_WIDGET_WIDTH,
        height: MIN_WIDGET_HEIGHT,
      },
    }

    setWidgets((prev) => [...prev, newWidget])
    setSelectedWidget(newWidget.id)
    setIsAddWidgetOpen(false)
  }, [])

  const handleDeleteWidget = useCallback((widgetId: string) => {
    setWidgets((prev) => prev.filter((widget) => widget.id !== widgetId))
    setSelectedWidget(null)
  }, [])

  const handleUpdateWidget = useCallback((widgetId: string, content: any) => {
    setWidgets((prev) => prev.map((widget) => (widget.id === widgetId ? { ...widget, content } : widget)))
  }, [])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent, widgetId: string, action: "move" | "resize") => {
      e.preventDefault()
      e.stopPropagation()

      const widget = widgets.find((w) => w.id === widgetId)
      if (!widget) return

      setSelectedWidget(widgetId)

      if (action === "move") {
        setIsDragging(true)
        const rect = e.currentTarget.getBoundingClientRect()
        setDragOffset({
          x: e.clientX - widget.position.x,
          y: e.clientY - widget.position.y,
        })
      } else if (action === "resize") {
        setIsResizing(true)
        setDragOffset({
          x: e.clientX,
          y: e.clientY,
        })
      }

      const handleMouseMove = (e: MouseEvent) => {
        if (action === "move") {
          const canvasRect = canvasRef.current?.getBoundingClientRect()
          if (!canvasRect) return

          const newX = snapToGrid(e.clientX - canvasRect.left - dragOffset.x)
          const newY = snapToGrid(e.clientY - canvasRect.top - dragOffset.y)

          setWidgets((prev) =>
            prev.map((w) =>
              w.id === widgetId
                ? {
                    ...w,
                    position: {
                      ...w.position,
                      x: Math.max(0, newX),
                      y: Math.max(0, newY),
                    },
                  }
                : w,
            ),
          )
        } else if (action === "resize") {
          const deltaX = e.clientX - dragOffset.x
          const deltaY = e.clientY - dragOffset.y

          setWidgets((prev) =>
            prev.map((w) =>
              w.id === widgetId
                ? {
                    ...w,
                    position: {
                      ...w.position,
                      width: Math.max(MIN_WIDGET_WIDTH, snapToGrid(w.position.width + deltaX)),
                      height: Math.max(MIN_WIDGET_HEIGHT, snapToGrid(w.position.height + deltaY)),
                    },
                  }
                : w,
            ),
          )

          setDragOffset({
            x: e.clientX,
            y: e.clientY,
          })
        }
      }

      const handleMouseUp = () => {
        setIsDragging(false)
        setIsResizing(false)
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    },
    [widgets, dragOffset],
  )

  const handleCanvasClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedWidget(null)
    }
  }, [])

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Canvas Toolbar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Monitor className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Tablet className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Smartphone className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Undo className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Redo className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 p-8 overflow-auto">
        <div
          ref={canvasRef}
          className={`max-w-6xl mx-auto bg-white rounded-lg shadow-sm min-h-[600px] relative cursor-default ${
            isDragging || isResizing ? "canvas-dragging" : ""
          }`}
          onClick={handleCanvasClick}
        >
          {widgets.length === 0 ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="outline"
                className="flex flex-col items-center space-y-2 p-8"
                onClick={() => setIsAddWidgetOpen(true)}
              >
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Plus className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-gray-600">Add Widget</span>
              </Button>
            </div>
          ) : (
            <>
              {widgets.map((widget) => (
                <div
                  key={widget.id}
                  className={`absolute widget-container ${selectedWidget === widget.id ? "selected" : ""}`}
                  style={{
                    left: widget.position.x,
                    top: widget.position.y,
                    width: widget.position.width,
                    height: widget.position.height,
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedWidget(widget.id)
                  }}
                >
                  {widget.type === "text" && (
                    <TextWidget
                      id={widget.id}
                      content={widget.content}
                      isSelected={selectedWidget === widget.id}
                      onUpdate={(content) => handleUpdateWidget(widget.id, content)}
                      onDelete={() => handleDeleteWidget(widget.id)}
                      onMouseDown={handleMouseDown}
                    />
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Monitor className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Tablet className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Smartphone className="h-4 w-4" />
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setIsAddWidgetOpen(true)}>
            Add Widget
          </Button>
          <Button variant="outline" size="sm">
            <Undo className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Add Widget Dialog */}
      <Dialog open={isAddWidgetOpen} onOpenChange={setIsAddWidgetOpen}>
        <DialogContent className="sm:max-w-md">
          <AddWidgetDialog onAddWidget={handleAddWidget} onClose={() => setIsAddWidgetOpen(false)} />
        </DialogContent>
      </Dialog>

      <style jsx>{`
        .widget-container {
          background: white;
          border: 2px solid transparent;
          border-radius: 8px;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .widget-container:hover,
        .widget-container.selected {
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }

        .canvas-dragging {
          background-image: linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .resize-handle {
          position: absolute;
          background: #1f2937;
          border: 2px solid white;
          border-radius: 3px;
          cursor: nw-resize;
        }

        .resize-handle-se {
          bottom: -4px;
          right: -4px;
          width: 12px;
          height: 12px;
          cursor: se-resize;
        }

        .resize-handle-sw {
          bottom: -4px;
          left: -4px;
          width: 12px;
          height: 12px;
          cursor: sw-resize;
        }

        .move-handle {
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 32px;
          height: 32px;
          background: #1f2937;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: move;
          z-index: 10;
        }
      `}</style>
    </div>
  )
}
