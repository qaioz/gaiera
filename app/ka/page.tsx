import type { Metadata } from "next"
import FullPageScroll from "@/components/full-page-scroll"
import Header from "@/components/header"
import HeroSection from "@/components/ka/hero-section"
import CommunitySection from "@/components/ka/community-section"
import FeaturesSection from "@/components/ka/features-section"
import Footer from "@/components/ka/footer"

export const metadata: Metadata = {
  title: "GaiEra - შექმენით მძლავრი ვებსაიტები და აპლიკაციები კოდის გარეშე",
  description:
    "ააშენეთ ვებსაიტები და აპლიკაციები სრულყოფილად გამოცდილების გარეშე, კოდირების ან დიზაინის უნარების გარეშე. სწრაფი, მარტივი და მორგებადი.",
  keywords:
    "ვებსაიტის შემქმნელი, აპლიკაციის შემქმნელი, კოდის გარეშე, drag and drop, ვებსაიტის შემქმნელი, აპლიკაციის შემქმნელი, ქართული ვებსაიტის შემქმნელი",
  openGraph: {
    title: "GaiEra - შექმენით მძლავრი ვებსაიტები და აპლიკაციები კოდის გარეშე",
    description:
      "ააშენეთ ვებსაიტები და აპლიკაციები სრულყოფილად გამოცდილების გარეშე, კოდირების ან დიზაინის უნარების გარეშე. სწრაფი, მარტივი და მორგებადი.",
    url: "https://gaiera.com/ka",
    siteName: "GaiEra",
    locale: "ka_GE",
    type: "website",
  },
}

export default function GeorgianHome() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FullPageScroll>
          <HeroSection />
          <CommunitySection />
          <FeaturesSection />
        </FullPageScroll>
      </main>
      <Footer />
    </div>
  )
}
