'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export const Navbar = () => {
  const pathname = usePathname()
  const isHideNavbar = pathname == '/browse'
  return (
    <>
      {!isHideNavbar && <div className={`flex justify-between items-center p-4 text-white bg-transparent relative z-10`}>
        <ul className='flex gap-4'>
          <Link href="/" >Home</Link>
          <Link href="/browse">Browse Anime</Link>
          <Link href="https://jikan.moe" target='_blank'>Jikan API</Link>
        </ul>
        <Link href="/search">Search Anime</Link>
      </div>}
    </>
  )
}
