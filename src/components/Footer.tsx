import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-[#0e0e0e] text-[#d7d7d7] p-6 text-center'>
      <p className="text-md mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, maxime.</p>
      <ul className="flex justify-center gap-4">
        <Link href="https://github.com/pengpa0012" target='_blank' className='cursor-pointer hover:text-white'>Github</Link>
        <Link href="https://jikan.moe/" target='_blank' className='cursor-pointer hover:text-white'>Jikan API</Link>
      </ul>
    </div>
  )
}
