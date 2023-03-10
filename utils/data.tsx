import React from "react" 
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"
 

export const SOCIALS = [
  {
    link: "/",
    icon: (
      <AiOutlineGithub
        className="cursor-pointer text-white transition-transform hover:-translate-y-1 hover:text-neutral-300"
        size={25}
      />
    ),
  },
  {
    link: "/",
    icon: (
      <AiOutlineYoutube
        className="cursor-pointer text-white transition-transform hover:-translate-y-1 hover:text-neutral-300"
        size={25}
      />
    ),
  },
  {
    link: "/",
    icon: (
      <AiOutlineTwitter
        className="cursor-pointer text-white transition-transform hover:-translate-y-1 hover:text-neutral-300"
        size={25}
      />
    ),
  },
  {
    link: "/",
    icon: (
      <AiOutlineLinkedin
        className="cursor-pointer text-white transition-transform hover:-translate-y-1 hover:text-neutral-300"
        size={25}
      />
    ),
  },
]
