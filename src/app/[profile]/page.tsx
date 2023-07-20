import { fetchData } from '@/utilities/fetch'
import React from 'react'

export default async function page({params}: any) {
  const {data} = await fetchData(`https://api.jikan.moe/v4/anime/${params.profile}/full`)
  return (
    <main className='min-h-screen bg-[#010101] text-white mt-[-56px] grid place-items-center'>
      <div>{data.title}</div>
    </main>
  )
}
