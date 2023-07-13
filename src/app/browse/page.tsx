import React from 'react'

export default function About() {
  return (
    <main className='min-h-screen bg-[#010101] mt-[-56px] text-white grid grid-cols-1 md:grid-cols-3 place-items-center gap-2'>
      {
        [1,2,3,4,5,6,7,8,9].map(item => (
          <ul key={item} className='w-full h-full bg-green-100/10 grid place-items-center'>
            <li className="text-2xl font-bold">Genre</li>
          </ul>
        ))
      }
    </main>
  )
}
