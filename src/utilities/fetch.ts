export const fetchData = async (endpoint: string) => {
  const res = await fetch(endpoint)
  const data = await res.json()
  return data
}

export const genres = [
  {
    name: "Adventure",
    image: "https://cdn.myanimelist.net/images/anime/13/17405l.jpg"
  },
  {
    name: "Romance",
    image: "https://cdn.myanimelist.net/images/anime/1958/107912l.jpg"
  },
  {
    name: "Psychological",
    image: "https://cdn.myanimelist.net/images/anime/1718/91550l.jpg"
  },
  {
    name: "Horror",
    image: "https://cdn.myanimelist.net/images/anime/3/20713l.jpg"
  },
  {
    name: "Comedy",
    image: "https://cdn.myanimelist.net/images/anime/2/83188l.jpg"
  },
  {
    name: "Drama",
    image: "https://cdn.myanimelist.net/images/anime/1757/116931l.jpg"
  },
  {
    name: "Harem",
    image: "https://cdn.myanimelist.net/images/anime/7/68783l.jpg"
  },
  {
    name: "Supernatural",
    image: "https://cdn.myanimelist.net/images/anime/9/9453l.jpg"
  },
  {
    name: "Sci-Fi",
    image: "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg"
  },
]