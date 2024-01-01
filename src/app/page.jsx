import Image from "next/image"
import Header from "./components/Header/page"
import {  IoLogoJavascript, 
          IoLogoHtml5, 
          IoLogoCss3,
          IoLogoPython,
          IoLogoFigma,
          IoLogoNpm
} from "react-icons/io5"
import {  TbBrandTailwind, TbBrandNextjs } from "react-icons/tb"
import { FaReact, FaGitSquare, FaGithubSquare } from 'react-icons/fa'
import { SiTypescript } from "react-icons/si"
import CardProject from "./components/Card-project/page"

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

        <section className="max-w-[1464px] w-[80%] m-auto mt-28 text-center">
          <h2 className="text-shadow text-white font-bold text-3xl mb-7 uppercase">Minhas Skills</h2>
          <div className="max-w-[500px] w-full rounded-lg m-auto">
            <div className="w-full h-full flex items-center flex-wrap gap-11 justify-center">
              <IoLogoJavascript size={80} color="#FFFF00" title="JavaScript" className="icons-animation"/>
              <SiTypescript size={80} color="#2EFEF7" title="Typescript" className="icons-animation"/>
              <FaReact size={80} color="#00FFFF" title="React" className="icons-animation"/>
              <TbBrandTailwind size={80} color="#00FFFF" title="Tailwind" className="icons-animation"/>
              <TbBrandNextjs size={80} color="#FFFFFF" title="NextJS" className="icons-animation"/>
              <IoLogoHtml5 size={80} color="#FF8000" title="HTML5" className="icons-animation"/>
              <IoLogoCss3 size={80} color="#2EFEF7" title="CSS3" className="icons-animation"/>
              <IoLogoFigma size={80} color="#FE2EF7" title="Figma" className="icons-animation"/>
              <IoLogoPython size={80} color="#2ECCFA" title="Python" className="icons-animation"/>
              <FaGitSquare size={80} color="#FF8000" title="Git" className="icons-animation"/>
              <FaGithubSquare size={80} color="#000000" title="GitHub" className="icons-animation"/>
              <IoLogoNpm size={80} color="#FF0000" title="npm" className="icons-animation"/>
          </div>
          </div>
        </section>

        <section className="max-w-[1464px] w-[80%] text-center mt-28 m-auto mb-72">
          <h2 className="text-shadow uppercase font-bold text-3xl text-white">Projetos</h2>
          <div className="mt-28 flex gap-6 flex-wrap justify-around">
            <CardProject 
              src="/assets/game-pikachu.png" 
              alt="Game do Pikachu" 
              github="https://github.com/JoaoLeandroo/game-pikachu"
              deploy="https://joaoleandroo.github.io/game-pikachu/"
            />
            
            <CardProject 
              src="/assets/teste.png" 
              alt="Game do Pikachu" 
              github="https://github.com/JoaoLeandroo/game-pikachu"
              deploy="https://joaoleandroo.github.io/game-pikachu/"
            />

            <CardProject 
              src="/assets/game-pokemon.png" 
              alt="Game do Pikachu" 
              github="https://github.com/JoaoLeandroo/game-pikachu"
              deploy="https://joaoleandroo.github.io/game-pikachu/"
            />
          </div>
        </section>
      </main>
    </>
  )
}