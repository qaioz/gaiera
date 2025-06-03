"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export function SiteSettings() {
  const [settings, setSettings] = useState({
    title: "My Website",
    description: "A website built with GaiEra",
    favicon: "",
    customDomain: "",
    seoEnabled: true,
    analyticsEnabled: false,
  })

  const handleChange = (field: string, value: string | boolean) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="general" className="flex-1">
          General
        </TabsTrigger>
        <TabsTrigger value="seo" className="flex-1">
          SEO
        </TabsTrigger>
        <TabsTrigger value="advanced" className="flex-1">
          Advanced
        </TabsTrigger>
      </TabsList>
      <TabsContent value="general" className="space-y-4 pt-4">
        <div className="space-y-2">
          <Label htmlFor="title">Website Title</Label>
          <Input id="title" value={settings.title} onChange={(e) => handleChange("title", e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={settings.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="favicon">Favicon URL</Label>
          <Input
            id="favicon"
            value={settings.favicon}
            onChange={(e) => handleChange("favicon", e.target.value)}
            placeholder="https://example.com/favicon.ico"
          />
        </div>
        <Button>Save Settings</Button>
      </TabsContent>
      <TabsContent value="seo" className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="seo-toggle">SEO Optimization</Label>
            <p className="text-sm text-muted-foreground">Enable automatic SEO optimization</p>
          </div>
          <Switch
            id="seo-toggle"
            checked={settings.seoEnabled}
            onCheckedChange={(checked) => handleChange("seoEnabled", checked)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="meta-title">Meta Title</Label>
          <Input id="meta-title" defaultValue={settings.title} disabled={!settings.seoEnabled} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="meta-description">Meta Description</Label>
          <Textarea id="meta-description" defaultValue={settings.description} disabled={!settings.seoEnabled} />
        </div>
        <Button disabled={!settings.seoEnabled}>Save SEO Settings</Button>
      </TabsContent>
      <TabsContent value="advanced" className="space-y-4 pt-4">
        <div className="space-y-2">
          <Label htmlFor="custom-domain">Custom Domain</Label>
          <Input
            id="custom-domain"
            value={settings.customDomain}
            onChange={(e) => handleChange("customDomain", e.target.value)}
            placeholder="example.com"
          />
          <p className="text-xs text-muted-foreground">Available on Pro and Business plans</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="analytics-toggle">Analytics</Label>
            <p className="text-sm text-muted-foreground">Enable website analytics tracking</p>
          </div>
          <Switch
            id="analytics-toggle"
            checked={settings.analyticsEnabled}
            onCheckedChange={(checked) => handleChange("analyticsEnabled", checked)}
          />
        </div>
        <Button>Save Advanced Settings</Button>
      </TabsContent>
    </Tabs>
  )
}
