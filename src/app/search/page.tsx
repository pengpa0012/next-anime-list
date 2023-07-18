"use client"
import { Card } from '@/components/Card'
import { fetchData } from '@/utilities/fetch'
import React, { useState } from 'react'

export default function Search() {
  const [animeText, setAnimeText] = useState("")
  const [allAnime, setAllAnime] = useState([])

  const onSearchAnime = async (e:any) => {
    e.preventDefault()
    const {data} = await fetchData(`https://api.jikan.moe/v4/anime?q=${animeText}`)
    setAllAnime(data)
  }

  return (
    <>
      <div className="search-banner w-full relative h-[300px] mt-[-56px] z-[-1]"></div>
      <main className='min-h-screen bg-[#010101] box-shadow-top text-white'>
        <h1 className='text-center mb-4 text-3xl'>Search Anime</h1>
        <form className="flex justify-center gap-2 max-w-2xl mx-auto" onSubmit={onSearchAnime}>
          <input type="text" placeholder='Ex. Attack on Titan' className='border border-white rounded-md p-2 bg-transparent w-full' onChange={(e) => setAnimeText(e.target.value)} />
          <button type='submit' className='bg-white text-black rounded-md py-2 px-6'>Search</button>
        </form>
        <div className="py-20 flex justify-center flex-wrap gap-10">
          {
            allAnime.map((item: any, i: number) => (
              <Card item={item} key={`card-${i}`} />
            ))
          }
        </div>
      </main>
    </>
  )
}
