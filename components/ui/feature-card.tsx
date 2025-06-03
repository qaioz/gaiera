import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: "blue" | "red" | "purple" | "green"
  showIcons?: string[]
  showButton?: boolean
}

export function FeatureCard({ icon: Icon, title, description, color, showIcons, showButton }: FeatureCardProps) {
  const colorClasses = {
    blue: { bg: "bg-blue-50", text: "text-blue-500", button: "bg-blue-500 hover:bg-blue-600" },
    red: { bg: "bg-red-50", text: "text-red-500", button: "bg-red-500 hover:bg-red-600" },
    purple: { bg: "bg-purple-50", text: "text-purple-500", button: "bg-purple-500 hover:bg-purple-600" },
    green: { bg: "bg-green-50", text: "text-green-500", button: "bg-green-500 hover:bg-green-600" },
  }

  const styles = colorClasses[color]

  return (
    <div className={`${styles.bg} p-6 rounded-lg`}>
      <div className="mb-4">
        <Icon className={`h-6 w-6 ${styles.text}`} />
      </div>

      <h3 className={`text-lg font-bold mb-2 ${styles.text}`}>{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      {showIcons && (
        <div className="flex items-center gap-2 mt-4">
          {showIcons.map((emoji, index) => (
            <div key={index} className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-xs">{emoji}</span>
            </div>
          ))}
        </div>
      )}

      {showButton && <Button className={`${styles.button} text-white mt-4`}>Try Alpha Now - it&apos;s free</Button>}
    </div>
  )
}
