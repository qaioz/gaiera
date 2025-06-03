import { Layers, Smartphone, Zap, Search, PaintBucket, BarChart } from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "Drag & Drop Builder",
      description: "Easily build your website with our intuitive drag and drop interface. No coding skills required.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "Mobile Responsive",
      description: "All websites created with GaiEra are fully responsive and look great on any device.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast",
      description: "Optimized for speed with next-generation rendering and optimization techniques.",
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "SEO Optimized",
      description: "Built-in SEO tools to help your website rank higher in search engines.",
    },
    {
      icon: <PaintBucket className="h-10 w-10 text-primary" />,
      title: "Customizable Designs",
      description: "Hundreds of customizable widgets and templates to match your brand.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Analytics Integration",
      description: "Connect with popular analytics tools to track your website performance.",
    },
  ]

  return (
    <section className="container py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to create professional websites without writing a single line of code
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {features.map((feature, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
