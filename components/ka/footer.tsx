import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white py-6 border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="relative w-6 h-6 rounded-full bg-black flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 3L13 8L8 13L3 8L8 3Z" fill="white" />
            </svg>
          </div>
          <span className="font-bold">GaiEra</span>
        </div>
        <div className="text-sm text-gray-500 mb-4 md:mb-0">© 2025 GaiEra. ყველა უფლება დაცულია.</div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/ka/terms" className="text-gray-500 hover:text-gray-700">
            წესები და პირობები
          </Link>
          <Link href="/ka/privacy" className="text-gray-500 hover:text-gray-700">
            კონფიდენციალურობის პოლიტიკა
          </Link>
          <div className="text-gray-500">
            დაგვიკავშირდით:{" "}
            <a href="mailto:support@gaiera.com" className="text-indigo-500 hover:underline">
              support@gaiera.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
