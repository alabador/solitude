import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { albertSans } from '@/styles/fonts'


export default function ProfessionCard({title, image}: 
    {title:string, image:any}) {
  return (
    <div className="card items-center bg-base-100 shadow-xl">
        <div className={`${albertSans.className} card-body`}>
            <h2 className="card-title">{title}</h2>
        </div>
        <Image 
            src={image}
            alt={`${title} profession icon`}
            className='p-16'
        />
    </div>
  )
}
