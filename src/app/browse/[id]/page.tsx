import { Card } from "@/components/Card"
import { fetchData } from "@/utilities/fetch"

export default async function page ({ params }: any){
  const {data} = await fetchData("https://api.jikan.moe/v4/genres/anime")
  const findGenre = data.find((genre: any) => genre.name == params.id)
  const {data: filteredAnime} = await fetchData(`https://api.jikan.moe/v4/anime?genre=${findGenre.mal_id}`)

  console.log(findGenre, params.id)

  return  (
    <main className='min-h-screen bg-[#010101] mt-[-56px] text-white'>
      <div className="pt-[56px] flex flex-wrap gap-10">
        {
          filteredAnime.map((item: any, i: number) => (
            <Card item={item} key={`card-${i}`} />
          ))
        }
      </div>
    </main>
  )
}
