const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token"
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing"

export interface SpotifyArtist {
  external_urls: { spotify: string }
  id: string
  name: string
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
  name: string
}

export interface NowPlayingResponse {
  isPlaying: boolean
  track: {
    name: string
    artist: string
    album: string
    albumArt: string
    trackUrl: string
    progress: number
    duration: number
  } | null
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
      artist: data.item.artists.map((a: SpotifyArtist) => a.name).join(", "),
      album: data.item.album.name,
      albumArt: data.item.album.images[0]?.url ?? "",
      trackUrl: data.item.external_urls.spotify,
      progress: data.progress_ms,
      duration: data.item.duration_ms,
    },
  }
}