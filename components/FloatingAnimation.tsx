"use client"
import React, { useState, useEffect } from "react"
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5"

import { getPostViews } from "../lib/usePostViews"
import { getPostLikes, updatePostLikes } from "../lib/usePostLikes"

interface Props {
  slug: string
}

const FloatingAnimation = ({ slug }: Props) => {
  const [likes, setLikes] = useState(0)
  const [views, setViews] = useState(0)

  const handleClick = async () => {
    const payload = await updatePostLikes(slug, 1)
    setLikes(payload.likes)
  }

  // Fetch likes on component mount
  useEffect(() => {
    const fetchLikes = async () => {
      const payload = await getPostLikes(slug)
      setLikes(payload.likes)
    }
    fetchLikes()

    const fetchViews = async () => {
      const payload = await getPostViews(slug)
      setViews(payload.views)
    }
    fetchViews()
  }, [slug])

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-row justify-around items-center bg-neutral-900 rounded-full p-4 border border-stone-500 w-48">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <button onClick={handleClick}>
              <IoHeartOutline size={25} className="text-red-500" />
            </button>
            <span className="text-sm">{likes}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <IoEyeOutline size={25} />
            <span className="text-sm">{views}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloatingAnimation
