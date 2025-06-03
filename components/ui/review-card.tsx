import Image from "next/image"
import { Star } from "lucide-react"

interface ReviewCardProps {
  name: string
  avatar: string
  rating: number
  text: string
  platform: string
}

export function ReviewCard({ name, avatar, rating, text, platform }: ReviewCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image src={avatar || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <span className="font-medium">{name}</span>
      </div>

      <div className="flex mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="text-sm text-gray-600 mb-3">{text}</p>

      <div className="flex items-center gap-1 text-xs text-red-500">
        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
          <span className="text-red-500 font-bold">P</span>
        </div>
        <span>{platform}</span>
      </div>
    </div>
  )
}
