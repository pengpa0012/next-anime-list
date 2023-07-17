"use client"
import React from 'react'

export default function Search() {
  return (
    <>
      <div className="search-banner w-full relative h-[300px] mt-[-56px] z-[-1]"></div>
      <main className='min-h-screen bg-[#010101] box-shadow-top text-white'>
        <h1 className='text-center mb-4 text-3xl'>Search Anime</h1>
        <form className="flex justify-center gap-2 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder='Ex. Attack on Titan' className='border border-white rounded-md p-2 bg-transparent w-full' />
          <button type='submit' className='bg-white text-black rounded-md py-2 px-6'>Search</button>
        </form>
      </main>
    </>
  )
}
