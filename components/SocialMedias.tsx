import { socialMedia } from '@/data'
import Image from 'next/image'
import React from 'react'

export default function SocialMedias() {
  return (
    <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a href={info.link} target='_blank' key={info.id} className="size-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <Image src={info.img} alt="icons" width={20} height={20} />
              
            </a>
          ))}
        </div>
  )
}

