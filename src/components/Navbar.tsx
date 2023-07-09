import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-transparent text-white relative z-10">
      <ul className='flex gap-4'>
        <Link href="/" >Home</Link>
        <Link href="/about" >About</Link>
        <li>Browse Anime</li>
        <li>Jikan API</li>
      </ul>
      <p>Search Anime</p>
    </div>
  )
}
