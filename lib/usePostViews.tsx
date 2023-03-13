import React from "react"
import { useDebounce } from "react-use"

const API_URL = `/api/views`

interface DataProps {
  views: number
}

export async function getPostViews(slug: string): Promise<DataProps> {
  const res = await fetch(API_URL + `/${slug}`)
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.")
  }
  return res.json()
}

export async function updatePostViews(slug: string): Promise<number> {
  const res = await fetch(API_URL + `/${slug}`, {
    method: "POST",
  })

  if (!res.ok) {
    throw new Error("An error occurred while posting the data.")
  }

  return res.json()
}
