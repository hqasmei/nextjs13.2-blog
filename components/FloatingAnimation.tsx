"use client"
import React from "react"
import { IoHeart, IoHeartOutline, IoEyeOutline } from "react-icons/io5"

import { usePostLikes } from "../lib/usePostLikes"
import { usePostViews } from "../lib/usePostViews"

interface Props {
  slug: string
}

const FloatingAnimation = ({ slug }: Props) => {
  const { currentUserLikes, likes, isLoading, increment } = usePostLikes(slug)
  const {
    views,
    isLoading: viewsIsLoading,
    isError: viewsIsError,
  } = usePostViews(slug)

  const handleClick = () => {
    increment()
  }

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-row justify-around items-center bg-neutral-900 rounded-full p-4 border border-stone-500 w-48">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <button onClick={handleClick}>
              {currentUserLikes === 1 ? (
                <IoHeart size={25} className="text-red-500" />
              ) : (
                <IoHeartOutline size={25} className="text-red-500" />
              )}
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
