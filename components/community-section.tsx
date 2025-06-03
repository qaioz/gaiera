import Image from "next/image"
import { Star } from "lucide-react"

export default function CommunitySection() {
  const reviews = [
    {
      name: "Bruce",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "GaiEra is a fantastic tool! It's super easy to use and has significantly improved my workflow. Highly recommend it for anyone looking to enhance their productivity!",
      platform: "Product Hunt",
    },
    {
      name: "Raymel Francisco",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Looks promising! From the landing page alone, it is a widget-based website builder.",
      platform: "Product Hunt",
    },
    {
      name: "Alex",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Just found this amazing tool from Product Hunt. Incredible!",
      platform: "Product Hunt",
    },
  ]

  const socialLinks = [
    { name: "Discord", icon: "/placeholder.svg?height=24&width=24", url: "#" },
    { name: "Facebook", icon: "/placeholder.svg?height=24&width=24", url: "#" },
    { name: "YouTube", icon: "/placeholder.svg?height=24&width=24", url: "#" },
    { name: "Twitter", icon: "/placeholder.svg?height=24&width=24", url: "#" },
  ]

  return (
    <section className="bg-gray-100 h-full flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Community</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium">{review.name}</span>
                  </div>
                  <div className="flex mb-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{review.text}</p>
                  <div className="flex items-center gap-1 text-xs text-red-500">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-500 font-bold">P</span>
                    </div>
                    <span>Product Hunt</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-500 font-bold text-xs">P</span>
                </div>
                <h3 className="font-medium">Join us on</h3>
              </div>
              <p className="text-red-500 font-medium">Product Hunt</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-xs">💬</span>
                </div>
                <h3 className="font-medium">Chat</h3>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-xs">✉️</span>
                </div>
                <h3 className="font-medium">Email</h3>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="grid grid-cols-4 gap-2 mb-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center"
                    aria-label={link.name}
                  >
                    <Image src={link.icon || "/placeholder.svg"} alt={link.name} width={16} height={16} />
                  </a>
                ))}
              </div>
              <p className="text-sm font-medium">Join us on</p>
              <p className="text-indigo-500 font-medium">Discord</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
