import Image from "next/image"
import Header from "./components/Header/page"

export default function Home() {
  return(
    <>
      <Header/>
      <main className="mt-10">
        <section className="max-w-[1464px] w-[80%]  m-auto bg-secundary-purple rounded-xl mt-28 flex justify-around">
          <div className="text-white text-center flex items-center flex-col justify-center">
            <h1 className="text-shadow text-4xl font-semibold uppercase">João Leandro</h1>
            <span className="text-shadow text-6xl font-bold">Web Developer</span>
          </div>

          <div>
            <Image
              className="my-image"
              src={'/images/joaol.png'}
              width={260}
              height={260}
              alt="João Leandro"
            />
          </div>
        </section>
      </main>
    </>
  )
}