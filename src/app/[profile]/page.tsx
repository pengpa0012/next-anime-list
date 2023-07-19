import React from 'react'

export default async function page({params}: any) {
  return (
    <main className='min-h-screen bg-[#010101] text-white mt-[-56px] grid place-items-center'>
      <div>{params.profile}</div>
    </main>
  )
}
