import { ReviewCard } from "@/components/ui/review-card"
import { SocialCard } from "@/components/ui/social-card"

export function CommunitySection() {
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

  return (
    <section className="bg-gray-100 h-full flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Community</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <SocialCard title="Join us on" subtitle="Product Hunt" icon="P" color="red" />
            <SocialCard title="Chat" icon="💬" color="blue" />
            <SocialCard title="Email" icon="✉️" color="blue" />
            <SocialCard title="Join us on" subtitle="Discord" icon="💬" color="indigo" showSocialIcons />
          </div>
        </div>
      </div>
    </section>
  )
}
