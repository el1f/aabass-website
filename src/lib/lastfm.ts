const BASE_URL = "https://ws.audioscrobbler.com/2.0/"

interface LastFmImage {
  "#text": string
  size: string
}

interface LastFmTrack {
  name: string
  playcount: string
  url: string
  artist: { name: string; url: string }
  image: LastFmImage[]
}

interface LastFmArtist {
  name: string
  playcount: string
  url: string
  image: LastFmImage[]
}

export interface MonthlyBestResponse {
  tracks: {
    id: string
    name: string
    url: string
    albumArt: string
    artists: { id: string; name: string; url: string }[]
  }[]
  artists: {
    id: string
    name: string
    url: string
    image: string
  }[]
}

function getApiKey(): string {
  return import.meta.env.LAST_FM_API_KEY ?? ""
}

function getLargestImage(images: LastFmImage[]): string {
  const sizes = ["extralarge", "large", "medium", "small"]
  for (const size of sizes) {
    const img = images.find((i) => i.size === size)
    if (img?.["#text"]) return img["#text"]
  }
  return ""
}

async function fetchLastFm(method: string, params: Record<string, string> = {}) {
  const url = new URL(BASE_URL)
  url.searchParams.set("method", method)
  url.searchParams.set("user", import.meta.env.LAST_FM_USERNAME ?? "yami4529")
  url.searchParams.set("api_key", getApiKey())
  url.searchParams.set("format", "json")
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value)
  }
  const res = await fetch(url.toString())
  if (!res.ok) throw new Error(`Last.fm API error: ${res.status}`)
  return res.json()
}

interface LastFmAlbum {
  name: string
  playcount: string
  url: string
  artist: { name: string; url: string }
  image: LastFmImage[]
}

interface LastFmRecentTrack {
  date?: { uts: string }
  "@attr"?: { nowplaying: string }
}

export interface TopItem {
  name: string
  url: string
  image: string
  playcount: number
  subtitle?: string
}

export interface ListeningStats {
  totalScrobbles: number
  estimatedMinutes: number
  topDayOfWeek: string
  topHourOfDay: number
  dayDistribution: Record<string, number>
  hourDistribution: Record<number, number>
}

export interface MusicPageData {
  monthlyArtists: TopItem[]
  yearlyArtists: TopItem[]
  monthlyAlbums: TopItem[]
  yearlyAlbums: TopItem[]
  monthlyTracks: TopItem[]
  yearlyTracks: TopItem[]
  stats: ListeningStats
}

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const AVG_TRACK_MINUTES = 3.5

function mapArtists(items: LastFmArtist[]): TopItem[] {
  return items.map((a) => ({
    name: a.name,
    url: a.url,
    image: getLargestImage(a.image),
    playcount: parseInt(a.playcount, 10),
  }))
}

function mapAlbums(items: LastFmAlbum[]): TopItem[] {
  return items.map((a) => ({
    name: a.name,
    url: a.url,
    image: getLargestImage(a.image),
    playcount: parseInt(a.playcount, 10),
    subtitle: a.artist.name,
  }))
}

function mapTracks(items: LastFmTrack[]): TopItem[] {
  return items.map((t) => ({
    name: t.name,
    url: t.url,
    image: getLargestImage(t.image),
    playcount: parseInt(t.playcount, 10),
    subtitle: t.artist.name,
  }))
}

export async function getMusicPageData(): Promise<MusicPageData> {
  const [
    monthlyArtistsData,
    yearlyArtistsData,
    monthlyAlbumsData,
    yearlyAlbumsData,
    monthlyTracksData,
    yearlyTracksData,
  ] = await Promise.all([
    fetchLastFm("user.gettopartists", { period: "1month", limit: "5" }),
    fetchLastFm("user.gettopartists", { period: "12month", limit: "5" }),
    fetchLastFm("user.gettopalbums", { period: "1month", limit: "5" }),
    fetchLastFm("user.gettopalbums", { period: "12month", limit: "5" }),
    fetchLastFm("user.gettoptracks", { period: "1month", limit: "5" }),
    fetchLastFm("user.gettoptracks", { period: "12month", limit: "5" }),
  ])

  const yearStart = Math.floor(new Date(new Date().getFullYear(), 0, 1).getTime() / 1000)

  const scrobblePages = await Promise.all(
    [1, 2, 3, 4, 5].map((page) =>
      fetchLastFm("user.getrecenttracks", {
        from: yearStart.toString(),
        limit: "200",
        page: page.toString(),
      })
    )
  )

  const totalScrobbles = parseInt(
    scrobblePages[0]?.recenttracks?.["@attr"]?.total ?? "0",
    10
  )

  const dayCount: Record<string, number> = {}
  const hourCount: Record<number, number> = {}
  for (const d of DAY_NAMES) dayCount[d] = 0
  for (let h = 0; h < 24; h++) hourCount[h] = 0

  for (const page of scrobblePages) {
    const tracks: LastFmRecentTrack[] = page?.recenttracks?.track ?? []
    for (const t of tracks) {
      if (t["@attr"]?.nowplaying) continue
      if (!t.date?.uts) continue
      const date = new Date(parseInt(t.date.uts, 10) * 1000)
      dayCount[DAY_NAMES[date.getDay()]]++
      hourCount[date.getHours()]++
    }
  }

  const topDay = Object.entries(dayCount).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "Monday"
  const topHour = Object.entries(hourCount).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "0"

  return {
    monthlyArtists: mapArtists(monthlyArtistsData?.topartists?.artist ?? []),
    yearlyArtists: mapArtists(yearlyArtistsData?.topartists?.artist ?? []),
    monthlyAlbums: mapAlbums(monthlyAlbumsData?.topalbums?.album ?? []),
    yearlyAlbums: mapAlbums(yearlyAlbumsData?.topalbums?.album ?? []),
    monthlyTracks: mapTracks(monthlyTracksData?.toptracks?.track ?? []),
    yearlyTracks: mapTracks(yearlyTracksData?.toptracks?.track ?? []),
    stats: {
      totalScrobbles,
      estimatedMinutes: Math.round(totalScrobbles * AVG_TRACK_MINUTES),
      topDayOfWeek: topDay,
      topHourOfDay: parseInt(topHour, 10),
      dayDistribution: dayCount,
      hourDistribution: hourCount,
    },
  }
}

export async function getMonthlyBest(): Promise<MonthlyBestResponse> {
  const [tracksData, artistsData] = await Promise.all([
    fetchLastFm("user.gettoptracks", { period: "1month", limit: "3" }),
    fetchLastFm("user.gettopartists", { period: "1month", limit: "3" }),
  ])

  const tracks: MonthlyBestResponse["tracks"] = (
    tracksData?.toptracks?.track ?? []
  ).map((t: LastFmTrack) => ({
    id: t.url,
    name: t.name,
    url: t.url,
    albumArt: getLargestImage(t.image),
    artists: [
      {
        id: t.artist.url,
        name: t.artist.name,
        url: t.artist.url,
      },
    ],
  }))

  const artists: MonthlyBestResponse["artists"] = (
    artistsData?.topartists?.artist ?? []
  ).map((a: LastFmArtist) => ({
    id: a.url,
    name: a.name,
    url: a.url,
    image: getLargestImage(a.image),
  }))

  return { tracks, artists }
}