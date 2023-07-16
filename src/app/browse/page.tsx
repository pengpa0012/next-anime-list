import { genres } from '@/utilities/fetch'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
 
  return (
    <main className='min-h-screen bg-[#010101] mt-[-56px] text-white grid grid-cols-1 md:grid-cols-3 place-items-center'>
      {
        genres.map(genre => (
          <div className='w-full h-full bg-green-100/10 grid place-items-center relative genre-shadow overflow-hidden'>
            <Link href={`/browse/${genre.name}`}>
              <p key={genre.name} className="text-3xl font-bold z-10 relative">{genre.name}</p>
              <Image src={genre.image} fill alt={'genre-img'} className='object-cover' />
            </Link>
          </div>
        ))
      }
    </main>
  )
}
