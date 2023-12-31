import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Card = ({item}: any) => {
  return (
    <div className="card w-[200px] h-[300px] overflow-hidden rounded-md flex-shrink-0 select-none cursor-pointer">
      <Link href={`/${item.mal_id}`}>
        <div className="card-details">
          <h4 className="text-xl text-center">{item.title}</h4>
        </div>
        <Image src={item.images.webp.image_url ?? "https://via.placeholder.com/200x350"} alt={"image"} width={0} height={0} sizes="100vw" className="w-full h-full object-cover"/>
      </Link>
    </div>
  )
}
