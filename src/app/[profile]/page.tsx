import { Carousel } from '@/components/Carousel'
import { Video } from '@/components/Video'
import { fetchData } from '@/utilities/fetch'
import Image from 'next/image'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

export default async function page({params}: any) {
  const {data} = await fetchData(`https://api.jikan.moe/v4/anime/${params.profile}/full`)
  const {data: pictures} = await fetchData(`https://api.jikan.moe/v4/anime/${params.profile}/pictures`)
  const {data: episodes} = await fetchData(`https://api.jikan.moe/v4/anime/${params.profile}/videos/episodes`)
  const {data: staff} = await fetchData(`https://api.jikan.moe/v4/anime/${params.profile}/staff`)
  return (
    <main>
      <section className="main-cover flex items-center text-white relative">
        <div className="p-6 max-w-4xl">
          <h1 className="text-7xl font-bold">{data?.title}</h1>
          <p className="text-xl my-4 text-limit">{data?.background ?? data?.synopsis}</p>
          <div className="flex gap-4">
            <button className="bg-white font-bold rounded-md py-2 px-8 text-2xl text-black flex items-center gap-2">
              <FaPlay />
              <span>Play</span>
            </button>
            <button className="font-bold rounded-md py-2 px-8 text-2xl">More Info</button>
          </div>
        </div>
        <Video imgSrc={data?.trailer.images.maximum_image_url ?? "https://via.placeholder.com/1280x1024"} />
      </section>
      <section className="bg-[#010101] box-shadow-top text-white px-4 py-12">
        <section className='py-12'>
          <h2 className='text-3xl mb-6'>Sypnosis</h2>
          <p className="text-xl">{data?.synopsis}</p>
        </section>
        <section className='py-12'>
          <h2 className='text-3xl mb-6'>Additional Info</h2>
          <ul>
            <li>Type: {data?.type}</li>
            <li>Episode: {data?.episodes}</li>
            <li>Status: {data?.status}</li>
            <li>Duration: {data?.duration}</li>
            <li>Rating: {data?.rating}</li>
            <li>Score: {data?.score}</li>
            <li>Rank: {data?.rank}</li>
            <li>Popularity: {data?.popularity}</li>
            <li>Season: {data?.season}</li>
            <li>Year: {data?.year}</li>
            <li className='flex gap-3'>Producers: {
              data?.producers?.map((item: any, i: number) => (
                <span key={`producer-${i}`}>{item.name}</span>
              ))
            }
            </li>
            <li className='flex gap-3'>Studios: {
              data?.studios?.map((item: any, i: number) => (
                <span key={`studios-${i}`}>{item.name}</span>
              ))
            }
            </li>
            <li className='flex gap-3'>Genres: {
              data?.genres?.map((item: any, i: number) => (
                <span key={`genres-${i}`}>{item.name}</span>
              ))
            }
            </li>
          </ul>
        </section>
        <section className='py-12'>
          <h2 className='text-3xl mb-6 text-center'>Trailer</h2>
          <div className='min-h-screen w-full relative z-10'>
            <Video video id={data?.trailer.youtube_id} />
          </div>
        </section>
        <section className='py-12'>
        {pictures?.length > 0 && <h2 className='text-3xl mb-6 text-center'>Pictures</h2>}
          <div className="flex gap-10 flex-wrap justify-center">
            {
              pictures?.map((pic: any, i: number) => (
                <Image src={pic.jpg.large_image_url ?? "https://via.placeholder.com/200x350"} alt={'image'} key={`img-${i}`} width={200} height={350} className='rounded-md object-cover'/>
              ))
            }
          </div>
        </section>
        <section className='py-12'>
        {episodes?.length > 0 && <h2 className='text-3xl mb-6 text-center'>Some of the episodes</h2>}
          <div className="flex gap-10 flex-wrap justify-center">
            {
              episodes?.map((episode: any, i: number) => (
                <div className='flex flex-col gap-2 text-center items-center'>
                  <p className='text-xs'>{episode.episode}</p>
                  <Image src={episode.images.jpg.image_url ?? "https://via.placeholder.com/200x113"} alt={'episode'} key={`ep-${i}`} width={200} height={113} className='rounded-md object-cover'/>
                </div>
              ))
            }
          </div>
        </section>
        <section className='py-12'>
          {staff?.length > 0 && <h2 className='text-3xl mb-6 text-center'>Staff</h2>}
          <div className="flex gap-10 flex-wrap justify-center">
            {
              staff?.map((staff: any, i: number) => (
                <>
                  {
                    !staff.person.images.jpg.image_url.includes("questionmark") ?
                      <div className='flex flex-col gap-2 text-center items-center'>
                        <p className='text-[10px]'>{staff.person.name}</p>
                        <Image src={staff.person.images.jpg.image_url ?? "https://via.placeholder.com/100x100"} alt={'staff'} key={`staff-${i}`} width={80} height={80} className='rounded-md aspect-square object-cover'/>
                      </div>
                    : undefined
                  }
                </>
              ))
            }
          </div>
        </section>
      </section>
    </main>
  )
}
