import type { LucideIcon } from "lucide-react"

interface FeatureBadgeProps {
  icon: LucideIcon
  label: string
}

export function FeatureBadge({ icon: Icon, label }: FeatureBadgeProps) {
  return (
    <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
      <Icon className="h-4 w-4 text-indigo-500" />
      <span className="text-sm">{label}</span>
    </div>
  )
}
