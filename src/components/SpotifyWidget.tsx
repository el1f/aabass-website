import { Popover } from "@base-ui/react/popover"
import { useCallback, useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { Icon } from "@/components/Icon"
import type { NowPlayingResponse } from "@/lib/spotify"
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
        <Icon name="spotify" />
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
                <Icon name="spotify" className="size-3" />
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