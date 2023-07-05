export default function Home() {
  return (
    <main>
      <section className="main-cover flex items-center">
        <div className="p-6 max-w-4xl">
          <h1 className="text-7xl font-bold">Title Here</h1>
          <p className="text-xl py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aut voluptatem ex deserunt laboriosam molestias asperiores eligendi, magnam quibusdam nisi. Ut commodi itaque quis? Autem?</p>
          <div className="flex gap-4">
            <button className="bg-white font-bold rounded-md py-2 px-8 text-2xl">Play</button>
            <button className="font-bold rounded-md py-2 px-8 text-2xl">More Info</button>
          </div>
        </div>
      </section>
      <section className="bg-[#141414] text-white p-4">
        <h1>Carousel here</h1>
      </section>
    </main>
  )
}
