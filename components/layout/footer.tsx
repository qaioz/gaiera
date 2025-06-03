import Link from "next/link"
import { Logo } from "@/components/ui/logo"

export function Footer() {
  return (
    <footer className="bg-white py-6 border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Logo />
        </div>

        <div className="text-sm text-gray-500 mb-4 md:mb-0">© 2025 GaiEra. All rights reserved.</div>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/terms" className="text-gray-500 hover:text-gray-700">
            Terms and conditions
          </Link>
          <Link href="/privacy" className="text-gray-500 hover:text-gray-700">
            Privacy Policy
          </Link>
          <div className="text-gray-500">
            Contact us:{" "}
            <a href="mailto:support@gaiera.com" className="text-indigo-500 hover:underline">
              support@gaiera.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
