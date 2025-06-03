"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Type, ImageIcon, LayoutGrid, ListChecks, MessageSquare, ShoppingCart, Contact, BarChart } from "lucide-react"

export function WidgetGallery() {
  const [searchTerm, setSearchTerm] = useState("")

  const widgetCategories = [
    {
      id: "basic",
      name: "Basic",
      widgets: [
        { id: "heading", name: "Heading", icon: <Type className="h-4 w-4" /> },
        { id: "paragraph", name: "Paragraph", icon: <Type className="h-4 w-4" /> },
        { id: "image", name: "Image", icon: <ImageIcon className="h-4 w-4" /> },
        { id: "button", name: "Button", icon: <Button className="h-4 w-4 p-0" /> },
      ],
    },
    {
      id: "layout",
      name: "Layout",
      widgets: [
        { id: "section", name: "Section", icon: <LayoutGrid className="h-4 w-4" /> },
        { id: "columns", name: "Columns", icon: <LayoutGrid className="h-4 w-4" /> },
        { id: "container", name: "Container", icon: <LayoutGrid className="h-4 w-4" /> },
      ],
    },
    {
      id: "advanced",
      name: "Advanced",
      widgets: [
        { id: "form", name: "Form", icon: <ListChecks className="h-4 w-4" /> },
        { id: "gallery", name: "Gallery", icon: <ImageIcon className="h-4 w-4" /> },
        { id: "testimonial", name: "Testimonial", icon: <MessageSquare className="h-4 w-4" /> },
        { id: "pricing", name: "Pricing", icon: <ShoppingCart className="h-4 w-4" /> },
        { id: "contact", name: "Contact", icon: <Contact className="h-4 w-4" /> },
        { id: "chart", name: "Chart", icon: <BarChart className="h-4 w-4" /> },
      ],
    },
  ]

  const filteredCategories = widgetCategories
    .map((category) => ({
      ...category,
      widgets: category.widgets.filter((widget) => widget.name.toLowerCase().includes(searchTerm.toLowerCase())),
    }))
    .filter((category) => category.widgets.length > 0)

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="w-full">
          {widgetCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex-1">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {widgetCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-2">
            {filteredCategories
              .find((c) => c.id === category.id)
              ?.widgets.map((widget) => (
                <div
                  key={widget.id}
                  className="flex items-center gap-2 p-2 border rounded-md cursor-move hover:bg-muted/50"
                  draggable
                >
                  {widget.icon}
                  <span className="text-sm">{widget.name}</span>
                </div>
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
