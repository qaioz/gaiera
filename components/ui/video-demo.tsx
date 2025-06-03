export function VideoDemo() {
  return (
    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="GaiEra Demo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0"
      />
    </div>
  )
}
