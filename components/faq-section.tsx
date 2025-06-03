import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Do I need coding knowledge to use GaiEra?",
      answer:
        "Not at all! GaiEra is designed for users with zero coding experience. Our drag-and-drop interface makes it easy to build professional websites without writing a single line of code.",
    },
    {
      question: "Can I connect my own domain name?",
      answer:
        "Yes, with our Pro and Business plans, you can connect your own custom domain name to your GaiEra website. We provide simple instructions to help you set up your domain correctly.",
    },
    {
      question: "Are the websites mobile responsive?",
      answer:
        "All websites created with GaiEra are fully responsive and will look great on desktops, tablets, and mobile phones. You can also preview how your site looks on different devices before publishing.",
    },
    {
      question: "How does the SEO optimization work?",
      answer:
        "GaiEra includes built-in SEO tools that help optimize your website for search engines. This includes customizable meta titles and descriptions, automatic sitemap generation, structured data, and performance optimization for faster loading times.",
    },
    {
      question: "Can I export my website?",
      answer:
        "With our Business plan, you can export your website's code for self-hosting. This gives you complete ownership and control over your website files.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial of our Pro plan so you can experience all the premium features before committing. No credit card required to start your trial.",
    },
  ]

  return (
    <section className="container py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Have questions? We've got answers.
        </p>
      </div>
      <div className="mx-auto max-w-3xl mt-16">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
