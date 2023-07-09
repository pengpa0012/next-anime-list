import { Video } from "@/components/Video"
import { fetchData } from "@/utilities/fetch"
import Image from "next/image"

export default async function Home() {
  const {data} = await fetchData("https://api.jikan.moe/v4/anime?min_score=9")

  return (
    <main>
      <section className="main-cover flex items-center text-white relative">
        <div className="p-6 max-w-4xl">
          <h1 className="text-7xl font-bold">Title Here</h1>
          <p className="text-xl py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut voluptatem ex deserunt laboriosam molestias asperiores eligendi, magnam quibusdam nisi. Ut commodi itaque quis? Autem?</p>
          <div className="flex gap-4">
            <button className="bg-white font-bold rounded-md py-2 px-8 text-2xl text-black">Play</button>
            <button className="font-bold rounded-md py-2 px-8 text-2xl">More Info</button>
          </div>
        </div>
        <Video id="XSaBR58f7I0" />
      </section>
      <section className="bg-[#141414] text-white p-4">
        <div className="-translate-y-[150px]">
          <h2 className="text-3xl mb-4 font-bold">Top Anime</h2>
          <div className="flex gap-10 overflow-x-auto space-x-8 custom-scroll pb-4">
            {
              data.map((item: any, i: number) => (
                <div className="max-h-[420px] overflow-hidden rounded-md flex-shrink-0" key={`card-${i}`}>
                  <Image src={item.images.webp.image_url} alt={"image"} width={300} height={420}/>
                </div>
              ))
            }
          </div>
        </div>
        
      </section>
    </main>
  )
}
