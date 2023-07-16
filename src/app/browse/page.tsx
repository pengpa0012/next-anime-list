import { genres } from '@/utilities/fetch'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
 
  return (
    <main className='min-h-screen bg-[#010101] text-white grid grid-cols-1 md:grid-cols-3 place-items-center'>
      {
        genres.map(genre => (
          <div className='w-full h-full bg-green-100/10 grid place-items-center relative genre-shadow overflow-hidden'>
            <Link href={`/browse/${genre.name}`}>
              <div className="overlay bg-black/50 w-full h-full absolute inset-0 z-10"></div>
              <p key={genre.name} className="p-4 rounded-md text-3xl font-bold z-10 relative">{genre.name}</p>
              <Image src={genre.image} fill alt={'genre-img'} className='object-cover' />
            </Link>
          </div>
        ))
      }
    </main>
  )
}
