import { useCallback, useEffect } from "react"
import { cn } from "@/lib/utils"

interface PosterLightboxProps {
  open: boolean
  title: string
  src: string
  onClose: () => void
}

export function PosterLightbox({ open, title, src, onClose }: PosterLightboxProps) {
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose()
  }, [onClose])

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", onKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, onKeyDown])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 flex flex-col items-center max-h-[90vh] max-w-[90vw]">
        <div className="flex items-center justify-end w-full mb-2">
          <button
            className="p-2 transition-colors rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={onClose}
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <img
          alt={title}
          className="max-h-[80vh] max-w-full object-contain rounded-lg"
          src={src}
        />
        <p className="mt-3 text-sm font-medium text-foreground">{title}</p>
      </div>
    </div>
  )
}