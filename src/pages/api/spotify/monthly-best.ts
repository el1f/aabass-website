import type { APIRoute } from "astro"
import { getMonthlyBest } from "@/lib/spotify"

export const prerender = false

export const GET: APIRoute = async () => {
  try {
    const data = await getMonthlyBest()
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch {
    return new Response(
      JSON.stringify({ tracks: [], artists: [] }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}