interface SocialCardProps {
  title: string
  subtitle?: string
  icon: string
  color: "red" | "blue" | "indigo"
  showSocialIcons?: boolean
}

export function SocialCard({ title, subtitle, icon, color, showSocialIcons }: SocialCardProps) {
  const colorClasses = {
    red: "bg-red-100 text-red-500",
    blue: "bg-blue-100 text-blue-500",
    indigo: "bg-indigo-100 text-indigo-500",
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${colorClasses[color]}`}>
          <span className="font-bold text-xs">{icon}</span>
        </div>
        <h3 className="font-medium">{title}</h3>
      </div>

      {subtitle && (
        <p
          className={`font-medium ${color === "red" ? "text-red-500" : color === "blue" ? "text-blue-500" : "text-indigo-500"}`}
        >
          {subtitle}
        </p>
      )}

      {showSocialIcons && (
        <div className="grid grid-cols-4 gap-2 mt-2">
          {["Discord", "Facebook", "YouTube", "Twitter"].map((platform) => (
            <div key={platform} className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-xs">📱</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
