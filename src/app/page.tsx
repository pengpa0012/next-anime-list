import { Carousel } from "@/components/Carousel"
import { Video } from "@/components/Video"
import { fetchData } from "@/utilities/fetch"
import Image from "next/image";
import { FaPlay } from 'react-icons/fa';

export default async function Home() {
  const {data} = await fetchData("https://api.jikan.moe/v4/top/anime")
  const {data: studio} = await fetchData("https://api.jikan.moe/v4/producers?order_by=favorites&sort=desc")
  const {data: voiceActor} = await fetchData("https://api.jikan.moe/v4/top/people")
  const {data: character} = await fetchData("https://api.jikan.moe/v4/top/characters")
  const bannerAnime = data.find((el: any) => el.title.includes("Fullmetal Alchemist: Brotherhood"))

  return (
    <main>
      <section className="main-cover flex items-center text-white relative">
        <div className="p-6 max-w-4xl">
          <h1 className="text-7xl font-bold">{bannerAnime.title}</h1>
          <p className="text-xl my-4 text-limit">{bannerAnime.background ?? bannerAnime.synopsis}</p>
          <div className="flex gap-4">
            <button className="bg-white font-bold rounded-md py-2 px-8 text-2xl text-black flex items-center gap-2">
              <FaPlay />
              <span>Play</span>
            </button>
            <button className="font-bold rounded-md py-2 px-8 text-2xl">More Info</button>
          </div>
        </div>
        <Video imgSrc={bannerAnime.trailer.images.maximum_image_url} /> {/*id={data[0].trailer.youtube_id} */}
      </section>
      <section className="bg-[#010101] box-shadow-top text-white px-4 py-12">
        <section className="-translate-y-[150px]">
          <h2 className="text-3xl mb-4 font-bold">Top Anime</h2>
          <Carousel animes={data} />
        </section>
        <section className="max-w-[2440px] m-auto">
          <div className="flex justify-center gap-10">
            <div className="card w-[200px] h-[300px]">
              <div className="card-details z-10">
                <div>
                  <h4>Top Studio</h4>
                  <p>{studio[0].titles[0].title}</p>
                </div>
              </div>
              <Image src={studio[0].images.jpg.image_url} alt={'studio'} fill className='rounded-md aspect-square object-cover'/>
            </div>
            <div className="card w-[200px] h-[300px] relative">
              <div className="card-details z-10">
                <div>
                  <h4>Top Character</h4>
                  <p>{character[0].name}</p>
                </div>
              </div>
              <Image src={character[0].images.jpg.image_url} alt={'character'} fill className='rounded-md object-cover'/>
            </div>
            <div className="card w-[200px] h-[300px] relative">
              <div className="card-details z-10">
                <div>
                  <h4>Top Voice Actor</h4>
                  <p>{voiceActor[0].name}</p>
                </div>
              </div> 
              <Image src={voiceActor[0].images.jpg.image_url} alt={'voice-actor'} fill className='rounded-md object-cover'/>
            </div>
          </div>
          {/* <h2 className="text-6xl">MAL Genre Counter</h2> */}
        </section>
      </section>
    </main>
  )
}