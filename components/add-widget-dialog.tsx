"use client"

import { Button } from "@/components/ui/button"
import { DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Type, ImageIcon, MousePointer, Link, Map, Layout, Grid } from "lucide-react"
import { X } from "lucide-react"

interface AddWidgetDialogProps {
  onAddWidget: (type: string) => void
  onClose: () => void
}

export function AddWidgetDialog({ onAddWidget, onClose }: AddWidgetDialogProps) {
  const widgets = [
    {
      id: "text",
      name: "Text",
      icon: <Type className="h-5 w-5 text-blue-600" />,
      enabled: true,
      description: "Add text content to your page",
    },
    {
      id: "image",
      name: "Image/video",
      icon: <ImageIcon className="h-5 w-5 text-gray-400" />,
      enabled: false,
      description: "Add images or videos",
    },
    {
      id: "button",
      name: "Button",
      icon: <MousePointer className="h-5 w-5 text-gray-400" />,
      enabled: false,
      description: "Add interactive buttons",
    },
    {
      id: "link",
      name: "link",
      icon: <Link className="h-5 w-5 text-gray-400" />,
      enabled: false,
      description: "Add clickable links",
    },
    {
      id: "map",
      name: "Map",
      icon: <Map className="h-5 w-5 text-gray-400" />,
      enabled: false,
      description: "Embed interactive maps",
    },
    {
      id: "section",
      name: "Section",
      icon: <Layout className="h-5 w-5 text-gray-400" />,
      enabled: false,
      description: "Add layout sections",
    },
    {
      id: "gallery",
      name: "Gallery",
      icon: <Grid className="h-5 w-5 text-gray-400" />,
      enabled: false,
      description: "Create image galleries",
    },
  ]

  return (
    <div className="space-y-6">
      <DialogHeader>
        <div className="flex items-center justify-between">
          <DialogTitle className="text-xl font-semibold flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
              <Layout className="h-4 w-4 text-blue-600" />
            </div>
            <span>Sections</span>
          </DialogTitle>
          <DialogClose className="h-6 w-6 rounded-full hover:bg-gray-100">
            <X className="h-4 w-4" />
          </DialogClose>
        </div>
      </DialogHeader>

      <div className="space-y-2">
        {widgets.map((widget) => (
          <button
            key={widget.id}
            onClick={() => widget.enabled && onAddWidget(widget.id)}
            disabled={!widget.enabled}
            className={`w-full p-3 rounded-lg border text-left transition-colors ${
              widget.enabled
                ? "border-blue-200 bg-blue-50 hover:bg-blue-100 cursor-pointer"
                : "border-gray-200 bg-gray-50 cursor-not-allowed opacity-60"
            }`}
          >
            <div className="flex items-center space-x-3">
              {widget.icon}
              <div>
                <div className={`font-medium ${widget.enabled ? "text-blue-900" : "text-gray-500"}`}>{widget.name}</div>
                <div className="text-sm text-gray-500">{widget.description}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="text-sm text-gray-600 mb-3">Preview:</div>
        <div className="bg-white rounded border p-4 text-sm text-gray-700">
          Auctor auctor mauris id porttitor donec velit metus. Etiam malesuada ut erat pretium nulla sed. A massa nisl
          est, eleifend vel a pellentesque tincidunt. Non vestibulum, volutpat odio pellentesque pulvinar. Nunc dictum
          elementum diam eu.
          <br />
          <br />
          Et aliquet aliquet volutpat urna cursus et dignissim. Hendrerit eleifend justo, nisl, pulvinar faucibus
          hendrerit tortor. Cum gravida urna purus et. Eget diam velit etiam tempor sollicitudin. Eget mauris nunc...
        </div>
      </div>

      <div className="flex justify-center">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8" onClick={() => onAddWidget("text")}>
          <Layout className="h-4 w-4 mr-2" />
          Add Widget
        </Button>
      </div>
    </div>
  )
}
