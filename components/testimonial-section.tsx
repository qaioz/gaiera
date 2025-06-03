import Image from "next/image"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "GaiEra has completely transformed how I build websites for my clients. What used to take weeks now takes hours.",
      author: "Sarah Johnson",
      role: "Freelance Designer",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The SEO features built into GaiEra helped our website rank on the first page of Google within weeks of launching.",
      author: "Michael Chen",
      role: "Marketing Director",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As someone with no coding experience, I was able to build a professional website for my small business in just one afternoon.",
      author: "Emma Rodriguez",
      role: "Small Business Owner",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="container py-24 sm:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Loved by Creators Worldwide</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          See what our users have to say about their experience with GaiEra
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-16">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-primary/20"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>
            <p className="mb-4 text-muted-foreground">{testimonial.quote}</p>
            <div className="flex items-center">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.author}
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <div>
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
