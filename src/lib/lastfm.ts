const BASE_URL = "https://ws.audioscrobbler.com/2.0/"
const USERNAME = "yami4529"

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
  return import.meta.env.LASTFM_API_KEY ?? ""
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
  url.searchParams.set("user", USERNAME)
  url.searchParams.set("api_key", getApiKey())
  url.searchParams.set("format", "json")
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value)
  }
  const res = await fetch(url.toString())
  if (!res.ok) throw new Error(`Last.fm API error: ${res.status}`)
  return res.json()
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