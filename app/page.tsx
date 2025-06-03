import type { Metadata } from "next"
import { LandingPage } from "@/components/pages/landing-page"

export const metadata: Metadata = {
  title: "GaiEra - Create Powerful Websites & Apps Without Code",
  description:
    "Build websites and apps perfectly without experience, no coding or design skills required. Fast, simple, and customizable.",
  keywords: "website builder, app builder, no-code, drag and drop, website creator, app creator",
  openGraph: {
    title: "GaiEra - Create Powerful Websites & Apps Without Code",
    description:
      "Build websites and apps perfectly without experience, no coding or design skills required. Fast, simple, and customizable.",
    url: "https://gaiera.com",
    siteName: "GaiEra",
    type: "website",
  },
}

export default function HomePage() {
  return <LandingPage />
}
