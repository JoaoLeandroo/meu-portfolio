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

        <section className="max-w-[1464px] w-[80%] mt-28 m-auto text-center">
          <h2 className="text-shadow text-white font-bold text-3xl mb-5 uppercase">Sobre</h2>
          <p className="text-white font-medium text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem doloremque, est sed, laborum voluptatibus laboriosam quae illo facere eveniet non dolor minus animi saepe nobis inventore? Exercitationem, est ex!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem doloremque, est sed, laborum voluptatibus laboriosam quae illo facere eveniet non dolor minus animi saepe nobis inventore? Exercitationem, est ex!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem doloremque, est sed, laborum voluptatibus laboriosam quae illo facere eveniet non dolor minus animi saepe nobis inventore? Exercitationem, est ex!
          </p>
        </section>

        <section className="max-w-[1464px] w-[80%] m-auto mt-28 text-center mb-72">
          <h2 className="text-shadow text-white font-bold text-3xl mb-5 uppercase">Minhas Skills</h2>
          <div className="w-full h-14 bg-secundary-purple rounded-lg">
            Menu animado
          </div>
        </section>
      </main>
    </>
  )
}