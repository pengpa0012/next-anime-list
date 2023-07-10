import Image from 'next/image'
import React from 'react'

export const Card = ({item}: any) => {
  return (
    <div className="w-[200px] h-[300px] overflow-hidden rounded-md flex-shrink-0 pointer-events-none select-none">
      <Image src={item.images.webp.image_url} alt={"image"} width={0} height={0} sizes="100vw" className="w-full h-full"/>
    </div>
  )
}
