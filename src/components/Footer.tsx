import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-[#0e0e0e] text-[#d7d7d7] p-6 text-center'>
      <p className="text-md mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, maxime.</p>
      <ul className="flex justify-center gap-4">
        <li className='cursor-pointer hover:text-white'>Github</li>
        <li className='cursor-pointer hover:text-white'>Jikan API</li>
      </ul>
    </div>
  )
}
