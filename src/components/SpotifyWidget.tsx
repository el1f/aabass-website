import { Popover } from "@base-ui/react/popover"
import { useCallback, useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { Icon } from "@/components/Icon"
import type { NowPlayingResponse, MonthlyBestResponse } from "@/lib/spotify"

const POLL_INTERVAL = 30_000

export function SpotifyWidget() {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingResponse | null>(null)
  const [topItems, setTopItems] = useState<MonthlyBestResponse | null>(null)
  const [open, setOpen] = useState(false)

  const fetchNowPlaying = useCallback(async () => {
    try {
      const res = await fetch("/api/spotify/now-playing")
      setNowPlaying(await res.json())
    } catch {
      setNowPlaying(null)
    }
  }, [])

  const fetchTopItems = useCallback(async () => {
    try {
      const res = await fetch("/api/spotify/monthly-best")
      setTopItems(await res.json())
    } catch {
      setTopItems(null)
    }
  }, [])

  useEffect(() => {
    fetchNowPlaying()
    fetchTopItems()
    const interval = setInterval(fetchNowPlaying, POLL_INTERVAL)
    return () => clearInterval(interval)
  }, [fetchNowPlaying, fetchTopItems])

  const isActive = nowPlaying?.isPlaying && nowPlaying.track
  const track = nowPlaying?.track

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
          <Popover.Popup className="p-4 overflow-hidden border rounded-xl bg-card/80 backdrop-blur-md border-border shadow-xl">
            <div className="flex gap-8">
              <div className="flex flex-col w-64">
                {isActive && track ? (
                  <>
                    <Icon name="spotify" className="absolute top-4 left-4 size-5" />

                    <figure className={cn(
                      "w-64 mb-4 overflow-hidden rounded-full bg-muted aspect-square relative",
                      "after:w-4 after:h-4 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-card after:rounded-full",
                      "before:w-20 before:h-20 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-black/30 before:rounded-full before:z-10",
                    )}>
                      <img
                        alt="Album cover"
                        className={cn(
                          "w-full h-full object-cover animate-[spin_4s_linear_infinite]",
                          { "[animation-play-state:paused]": !nowPlaying.isPlaying },
                        )}
                        src={track.albumArt}
                      />
                    </figure>

                    <span className="text-sm truncate">
                      <a className="hover:underline underline-offset-2" href={track.trackUrl} target="_blank" rel="noopener noreferrer">
                        {track.name}
                      </a>
                    </span>
                    <span className="text-xs text-muted-foreground truncate">
                      <a className="hover:underline underline-offset-2" href={track.albumUrl} target="_blank" rel="noopener noreferrer">
                        {track.album}
                      </a>
                    </span>
                    <span className="mb-2 text-xs text-muted-foreground truncate">
                      {track.artists.map((artist, i) => (
                        <span key={artist.id}>
                          <a className="hover:underline underline-offset-2" href={artist.url} target="_blank" rel="noopener noreferrer">
                            {artist.name}
                          </a>
                          {i < track.artists.length - 1 && ", "}
                        </span>
                      ))}
                    </span>

                    <div className="w-full h-0.5 relative bg-muted-foreground/20 rounded overflow-hidden mb-4">
                      <span
                        className="absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all"
                        style={{ width: `${(track.progress / track.duration) * 100}%` }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <figure className={cn(
                      "w-64 mb-4 overflow-hidden rounded-full bg-muted aspect-square relative",
                      "after:w-4 after:h-4 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-card after:rounded-full",
                      "before:w-20 before:h-20 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-black/30 before:rounded-full before:z-10",
                    )} />
                    <span className="mb-2 text-sm text-muted-foreground">
                      My streaming is idle right now and I'm probably listening to my thoughts.
                    </span>
                  </>
                )}

                <div className="flex flex-col gap-2">
                  <a
                    href="https://open.spotify.com/user/11170893355?si=ebb8a9d89ad947bf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-border hover:bg-muted transition-colors"
                  >
                    <Icon name="spotify" className="size-3.5" />
                    Profile
                  </a>
                  <a
                    href="https://www.last.fm/user/yami4529"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-border hover:bg-muted transition-colors"
                  >
                    Scrobbles
                  </a>
                </div>
              </div>

              {topItems && (topItems.tracks.length > 0 || topItems.artists.length > 0) && (
                <div className="flex-col justify-between hidden w-full md:flex max-w-[20rem]">
                  {topItems.tracks.length > 0 && (
                    <section>
                      <h6 className="mb-3 text-sm font-bold">My anthems this month</h6>
                      <div className="flex flex-col gap-2">
                        {topItems.tracks.map((t) => (
                          <div className="flex gap-2" key={t.id}>
                            <figure className="h-12 overflow-hidden rounded bg-muted aspect-square shrink-0">
                              <img alt="" className="w-full h-full object-cover" src={t.albumArt} />
                            </figure>
                            <div className="flex flex-col min-w-0">
                              <a className="text-sm truncate hover:underline underline-offset-2" href={t.url} target="_blank" rel="noopener noreferrer">
                                {t.name}
                              </a>
                              <span className="text-xs text-muted-foreground truncate">
                                {t.artists.map((a, i) => (
                                  <span key={a.id}>
                                    <a className="hover:underline underline-offset-2" href={a.url} target="_blank" rel="noopener noreferrer">{a.name}</a>
                                    {i < t.artists.length - 1 && ", "}
                                  </span>
                                ))}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {topItems.artists.length > 0 && (
                    <section className="mt-6">
                      <h6 className="mb-3 text-sm font-bold">This month&apos;s muses</h6>
                      <div className="flex flex-col gap-2">
                        {topItems.artists.map((a) => (
                          <div className="flex items-center gap-2 max-w-[20rem]" key={a.id}>
                            <figure className="h-12 overflow-hidden rounded-full bg-muted aspect-square shrink-0">
                              <img alt="" className="w-full h-full object-cover" src={a.image} />
                            </figure>
                            <a className="text-sm truncate hover:underline underline-offset-2" href={a.url} target="_blank" rel="noopener noreferrer">
                              {a.name}
                            </a>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </div>
              )}
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}