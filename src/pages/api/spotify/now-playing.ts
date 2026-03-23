import type { APIRoute } from "astro"
import { getNowPlaying } from "@/lib/spotify"

export const prerender = false

export const GET: APIRoute = async () => {
  try {
    const nowPlaying = await getNowPlaying()
    return new Response(JSON.stringify(nowPlaying), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch {
    return new Response(
      JSON.stringify({ isPlaying: false, track: null }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}