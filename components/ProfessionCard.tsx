import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { albertSans } from '@/styles/fonts'


export default function ProfessionCard({title, image}: 
    {title:string, image:any}) {

  const redirectUrl = `https://wynncraft.fandom.com/wiki/${title}`
  return (
    <a 
      className="card items-center bg-base-100 shadow-xl hover:scale-105 p-8 gap-4 " 
      href={redirectUrl}
      target='_blank'
    >
        <div className={`${albertSans.className} flex justify-center items-center`}>
            <h2 className="card-title text-sm md:text-base">{title}</h2>
        </div>

        <div className="flex justify-center items-center">
          <Image
              src={image}
              alt={`${title} profession icon`}
              className=''
          />
        </div>
    </a>
  )
}
