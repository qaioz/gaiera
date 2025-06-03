"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Laptop, Smartphone, Tablet } from "lucide-react"

export function WebsitePreview() {
  const [device, setDevice] = useState("desktop")

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Tabs value={device} onValueChange={setDevice} className="w-auto">
          <TabsList>
            <TabsTrigger value="desktop">
              <Laptop className="h-4 w-4 mr-2" />
              <span className="sr-only sm:not-sr-only">Desktop</span>
            </TabsTrigger>
            <TabsTrigger value="tablet">
              <Tablet className="h-4 w-4 mr-2" />
              <span className="sr-only sm:not-sr-only">Tablet</span>
            </TabsTrigger>
            <TabsTrigger value="mobile">
              <Smartphone className="h-4 w-4 mr-2" />
              <span className="sr-only sm:not-sr-only">Mobile</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Undo
          </Button>
          <Button variant="outline" size="sm">
            Redo
          </Button>
          <Button size="sm">Publish</Button>
        </div>
      </div>
      <div
        className={`border rounded-md bg-background overflow-hidden transition-all duration-300 mx-auto
        ${device === "desktop" ? "w-full h-[500px]" : ""}
        ${device === "tablet" ? "w-[768px] h-[500px]" : ""}
        ${device === "mobile" ? "w-[375px] h-[500px]" : ""}
      `}
      >
        <div className="w-full h-full p-4 flex items-center justify-center border-2 border-dashed">
          <div className="text-center text-muted-foreground">
            <p>Drag and drop widgets here to build your website</p>
            <p className="text-sm">Click on any element to edit its properties</p>
          </div>
        </div>
      </div>
    </div>
  )
}
