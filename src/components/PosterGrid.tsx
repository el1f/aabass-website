import { useState } from "react"
import { PosterLightbox } from "@/components/PosterLightbox"

interface Poster {
  title: string
  thumbnail: string
  src: string
}

interface PosterGridProps {
  posters: Poster[]
  format: "poster" | "disc"
}

export function PosterGrid({ posters, format }: PosterGridProps) {
  const [selected, setSelected] = useState<Poster | null>(null)

  const aspectClass = format === "poster" ? "aspect-[297/420]" : "aspect-square"

  return (
    <>
      <div className="container grid max-w-5xl grid-cols-1 gap-8 px-6 mx-auto mb-48 md:grid-cols-3 md:px-0">
        {posters.map((poster) => (
          <button
            key={poster.src}
            type="button"
            className={`relative bg-muted overflow-hidden ${aspectClass}`}
            onClick={() => setSelected(poster)}
          >
            <img
              alt={poster.title}
              className="block w-full h-full object-cover"
              src={`/posters/${poster.thumbnail}`}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <PosterLightbox
        open={selected !== null}
        title={selected?.title ?? ""}
        src={selected ? `/posters/${selected.src}` : ""}
        onClose={() => setSelected(null)}
      />
    </>
  )
}