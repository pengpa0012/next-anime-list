import { Carousel } from "@/components/Carousel"
import { Video } from "@/components/Video"
import { fetchData } from "@/utilities/fetch"

export default async function Home() {
  const {data} = await fetchData("https://api.jikan.moe/v4/anime?min_score=9")

  return (
    <main>
      <section className="main-cover flex items-center text-white relative">
        <div className="p-6 max-w-4xl">
          <h1 className="text-7xl font-bold">{data[1].title}</h1>
          <p className="text-xl my-4 text-limit">{data[1].background ?? data[1].synopsis}</p>
          <div className="flex gap-4">
            <button className="bg-white font-bold rounded-md py-2 px-8 text-2xl text-black">Play</button>
            <button className="font-bold rounded-md py-2 px-8 text-2xl">More Info</button>
          </div>
        </div>
         <Video imgSrc={data[1].trailer.images.maximum_image_url} /> {/*id={data[0].trailer.youtube_id} */}
      </section>
      <section className="bg-[#141414] text-white px-4 py-12">
        <div className="-translate-y-[150px]">
          <h2 className="text-3xl mb-4 font-bold">Top Anime</h2>
          <Carousel animes={data.slice(1)} />
        </div>
        <div>
          <h1 className="text-6xl">CONTENT HERE!!!</h1>
        </div>
      </section>
    </main>
  )
}
