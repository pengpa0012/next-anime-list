import { genres } from '@/utilities/fetch'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
 
  return (
    <main className='min-h-screen text-white grid grid-cols-1 md:grid-cols-3 place-items-center'>
      {
        genres.map(genre => (
          <Link href={`/browse/${genre.name}`} className='w-full h-full grid place-items-center relative genre-shadow overflow-hidden'>
            <div className="overlay w-full h-full absolute inset-0 z-10"></div>
            <p key={genre.name} className="p-4 rounded-md text-3xl font-bold z-10 relative">{genre.name}</p>
            <Image src={genre.image} fill alt={'genre-img'} className='object-cover' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </Link>
        ))
      }
    </main>
  )
}
