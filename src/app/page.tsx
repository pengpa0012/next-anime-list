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
      <section className="bg-[#141414] box-shadow-top text-white px-4 py-12">
        <section className="-translate-y-[150px]">
          <h2 className="text-3xl mb-4 font-bold">Top Anime</h2>
          <Carousel animes={data} />
        </section>
        <section className="max-w-[2440px] m-auto">
          <section className="py-12">
            <div className="flex gap-12">
              <div className="flex-1 max-w-2xl min-h-[200px] aspect-square object-cover relative box-shadow-left">
                <Image src={studio[0].images.jpg.image_url} alt={"studio-logo"} fill className="object-cover"/>
              </div>
              <div className="flex-1">
                <div className="mb-8">
                  <h2 className="text-xl text-white/90">Top Studio</h2>
                  <h3 className="text-6xl">{studio[0].titles[0].title}</h3>
                </div>
                <p className="text-md text-white/90">{studio[0].about}</p>
              </div>
            </div>
          </section>
          <section className="py-12">
            <div className="flex flex-row-reverse gap-12">
              <div className="flex-1 max-w-2xl min-h-[200px] aspect-square object-cover relative box-shadow-right">
              <Image src={character[0].images.jpg.image_url} alt={"character-logo"} fill className="object-cover"/>
              </div>
              <div className="flex-1">
                <div className="mb-8">
                  <h2 className="text-xl text-white/90">Top Character</h2>
                  <h3 className="text-6xl">{character[0].name}</h3>
                </div>
                <p className="text-md text-white/90">{character[0].about}</p>
              </div>
            </div>
          </section>
          <section className="py-12">
            <div className="flex gap-12">
              <div className="flex-1 max-w-2xl min-h-[200px] aspect-square object-cover relative box-shadow-left">
                <Image src={voiceActor[0].images.jpg.image_url} alt={"voiceActor-logo"} fill className="object-cover"/>
              </div>
              <div className="flex-1">
                <div className="mb-8">
                  <h2 className="text-xl text-white/90">Top Voice Actor</h2>
                  <h3 className="text-6xl">{voiceActor[0].name}</h3>
                </div>
                <p className="text-md text-white/90">{voiceActor[0].about}</p>
              </div>
            </div>
          </section>
          <h2 className="text-6xl">MAL Genre Counter</h2>
        </section>
      </section>
    </main>
  )
}
