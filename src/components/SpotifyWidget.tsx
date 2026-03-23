import { Popover } from "@base-ui/react/popover"
import { useCallback, useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import type { NowPlayingResponse } from "@/lib/spotify"

const SPOTIFY_ICON = `M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z`
const POLL_INTERVAL = 30_000

export function SpotifyWidget() {
  const [data, setData] = useState<NowPlayingResponse | null>(null)
  const [open, setOpen] = useState(false)

  const fetchNowPlaying = useCallback(async () => {
    try {
      const res = await fetch("/api/spotify/now-playing")
      const json: NowPlayingResponse = await res.json()
      setData(json)
    } catch {
      setData(null)
    }
  }, [])

  useEffect(() => {
    fetchNowPlaying()
    const interval = setInterval(fetchNowPlaying, POLL_INTERVAL)
    return () => clearInterval(interval)
  }, [fetchNowPlaying])

  const isActive = data?.isPlaying && data.track

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger className="relative block p-2 transition-colors rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground">
        <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d={SPOTIFY_ICON} />
        </svg>
        {isActive && (
          <span className="absolute w-1.5 h-1.5 rounded-full bottom-1 right-1 animate-pulse bg-green-500" />
        )}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner sideOffset={8}>
          <Popover.Popup className={cn(
            "w-72 p-4 rounded-xl border border-border bg-card text-card-foreground shadow-lg",
            "animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2",
          )}>
            {isActive && data.track ? (
              <div className="flex gap-3">
                <a href={data.track.trackUrl} target="_blank" rel="noopener noreferrer" className="shrink-0">
                  <img
                    src={data.track.albumArt}
                    alt={data.track.album}
                    className="rounded-lg size-16"
                  />
                </a>
                <div className="flex flex-col min-w-0 justify-center">
                  <a
                    href={data.track.trackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium truncate hover:underline underline-offset-2"
                  >
                    {data.track.name}
                  </a>
                  <span className="text-xs text-muted-foreground truncate">
                    {data.track.artist}
                  </span>
                  <span className="text-xs text-muted-foreground truncate">
                    {data.track.album}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Nothing playing right now.
              </p>
            )}

            <div className="flex gap-2 mt-3">
              <a
                href="https://open.spotify.com/user/11170893355?si=ebb8a9d89ad947bf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <svg className="size-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d={SPOTIFY_ICON} />
                </svg>
                Profile
              </a>
              <a
                href="https://www.last.fm/user/yami4529"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg border border-border hover:bg-muted transition-colors"
              >
                Scrobbles
              </a>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}