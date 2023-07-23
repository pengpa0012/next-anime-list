import { Video } from '@/components/Video'
import { fetchData } from '@/utilities/fetch'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

export default async function page({params}: any) {
  const {data} = await fetchData(`https://api.jikan.moe/v4/anime/${params.profile}/full`)
  console.log(data.trailer.images.maximum_image_url)
  return (
    <main>
      <section className="main-cover flex items-center text-white relative">
        <div className="p-6 max-w-4xl">
          <h1 className="text-7xl font-bold">{data.title}</h1>
          <p className="text-xl my-4 text-limit">{data.background ?? data.synopsis}</p>
          <div className="flex gap-4">
            <button className="bg-white font-bold rounded-md py-2 px-8 text-2xl text-black flex items-center gap-2">
              <FaPlay />
              <span>Play</span>
            </button>
            <button className="font-bold rounded-md py-2 px-8 text-2xl">More Info</button>
          </div>
        </div>
        <Video imgSrc={data.trailer.images.maximum_image_url ?? "https://via.placeholder.com/1280x1024"} />
      </section>
    </main>
  )
}
