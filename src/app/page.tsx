import { Carousel } from "@/components/Carousel"
import { Video } from "@/components/Video"
import { fetchData } from "@/utilities/fetch"
import { FaPlay } from 'react-icons/fa';

export default async function Home() {
  const {data} = await fetchData("https://api.jikan.moe/v4/anime?min_score=9")
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
        <div className="-translate-y-[150px]">
          <h2 className="text-3xl mb-4 font-bold">Top Anime</h2>
          <Carousel animes={data} />
        </div>
        <div>
          <h1 className="text-6xl">CONTENT HERE!!!</h1>
        </div>
      </section>
    </main>
  )
}
