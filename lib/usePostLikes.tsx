import React from "react"
import { useDebounce } from "react-use"

const API_URL = `/api/likes`

type MetricsPayload = {
  likes: number
  currentUserLikes: number
}

export async function getPostLikes(slug: string): Promise<MetricsPayload> {
  const res = await fetch(API_URL + `/${slug}`)
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.")
  }
  return res.json()
}

export async function updatePostLikes(
  slug: string,
  count: number
): Promise<MetricsPayload> {
  const res = await fetch(API_URL + `/${slug}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ count }),
  })

  if (!res.ok) {
    throw new Error("An error occurred while posting the data.")
  }

  return res.json()
}
