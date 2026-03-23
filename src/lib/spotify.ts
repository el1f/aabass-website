const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token"
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing"
const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks"
const TOP_ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists"

export interface SpotifyArtist {
  external_urls: { spotify: string }
  id: string
  name: string
  images?: SpotifyImage[]
}

export interface SpotifyImage {
  height: number
  url: string
  width: number
}

export interface SpotifyTrack {
  album: {
    external_urls: { spotify: string }
    images: SpotifyImage[]
    name: string
  }
  artists: SpotifyArtist[]
  duration_ms: number
  external_urls: { spotify: string }
  id: string
  name: string
}

export interface NowPlayingResponse {
  isPlaying: boolean
  track: {
    name: string
    artists: { id: string; name: string; url: string }[]
    album: string
    albumUrl: string
    albumArt: string
    trackUrl: string
    progress: number
    duration: number
  } | null
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

async function getAccessToken(): Promise<string> {
  const clientId = import.meta.env.SPOTIFY_CLIENT_ID
  const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET
  const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  })

  const data = await response.json()
  return data.access_token
}

export async function getNowPlaying(): Promise<NowPlayingResponse> {
  const accessToken = await getAccessToken()

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })

  if (response.status === 204 || response.status > 400) {
    return { isPlaying: false, track: null }
  }

  const data = await response.json()

  if (!data.item) {
    return { isPlaying: false, track: null }
  }

  return {
    isPlaying: data.is_playing,
    track: {
      name: data.item.name,
      artists: data.item.artists.map((a: SpotifyArtist) => ({
        id: a.id,
        name: a.name,
        url: a.external_urls.spotify,
      })),
      album: data.item.album.name,
      albumUrl: data.item.album.external_urls.spotify,
      albumArt: data.item.album.images[0]?.url ?? "",
      trackUrl: data.item.external_urls.spotify,
      progress: data.progress_ms,
      duration: data.item.duration_ms,
    },
  }
}

export async function getMonthlyBest(): Promise<MonthlyBestResponse> {
  const accessToken = await getAccessToken()

  const [tracksRes, artistsRes] = await Promise.all([
    fetch(`${TOP_TRACKS_ENDPOINT}?limit=3&time_range=short_term`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    }),
    fetch(`${TOP_ARTISTS_ENDPOINT}?limit=3&time_range=short_term`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    }),
  ])

  if (!tracksRes.ok || !artistsRes.ok) {
    return { tracks: [], artists: [] }
  }

  const tracksData = await tracksRes.json()
  const artistsData = await artistsRes.json()

  return {
    tracks: (tracksData.items ?? []).map((t: SpotifyTrack) => ({
      id: t.id,
      name: t.name,
      url: t.external_urls.spotify,
      albumArt: t.album.images[0]?.url ?? "",
      artists: t.artists.map((a) => ({
        id: a.id,
        name: a.name,
        url: a.external_urls.spotify,
      })),
    })),
    artists: (artistsData.items ?? []).map((a: SpotifyArtist) => ({
      id: a.id,
      name: a.name,
      url: a.external_urls.spotify,
      image: a.images?.[0]?.url ?? "",
    })),
  }
}