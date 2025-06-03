export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-8 h-8 rounded-full bg-black flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3L13 8L8 13L3 8L8 3Z" fill="white" />
        </svg>
      </div>
      <span className="font-bold text-xl">GaiEra</span>
    </div>
  )
}
