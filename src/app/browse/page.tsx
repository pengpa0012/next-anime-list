import { genres } from '@/utilities/fetch'
import Image from 'next/image'
import React from 'react'

export default function About() {
 
  return (
    <main className='min-h-screen bg-[#010101] mt-[-56px] text-white grid grid-cols-1 md:grid-cols-3 place-items-center gap-2'>
      {
        genres.map(genre => (
          <ul key={genre.name} className='w-full h-full bg-green-100/10 grid place-items-center relative genre-shadow overflow-hidden'>
            <li className="text-3xl font-bold z-10">{genre.name}</li>
            <Image src={genre.image} fill alt={'genre-img'} className='object-cover' />
          </ul>
        ))
      }
    </main>
  )
}
