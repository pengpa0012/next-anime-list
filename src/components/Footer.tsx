'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Footer = () => {
  const pathname = usePathname()
  const isHideNavbar = pathname == '/browse'
  return (
    <>
      {
        !isHideNavbar && <div className='bg-[#000] min-h-[200px] text-[#d7d7d7] p-6 text-center'>
          <p className="text-md mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, maxime.</p>
          <ul className="flex justify-center gap-4">
            <Link href="https://github.com/pengpa0012" target='_blank' className='cursor-pointer hover:text-white'>Github</Link>
            <Link href="https://jikan.moe/" target='_blank' className='cursor-pointer hover:text-white'>Jikan API</Link>
          </ul>
        </div>
      }
    </>
  )
}
