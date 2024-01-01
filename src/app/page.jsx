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
import Footer from "./components/Footer/Page"

export default function Home() {

  return(
    <>
      <Header/>
      <main className="">
        <section className="max-w-[1464px] w-[80%] m-auto bg-secundary-purple rounded-xl mt-10 flex justify-around max_640:flex-col">
          <div className="text-white text-center flex items-center flex-col justify-center">
            <h1 className="text-shadow text-4xl font-semibold uppercase max_640:text-lg max_640:mt-3 max_1024:text-2xl">João Leandro</h1>
            <span className="text-shadow text-6xl font-bold max_640:text-2xl max_768:text-3xl max_1024:text-4xl">Web Developer</span>
          </div>

          <div className="max_640:flex items-center justify-center">
            <Image
              className="my-image max_640:w-40 max_768:w-48 max_1024:w-52"
              src={'/images/joaol.png'}
              width={260}
              height={260}
              alt="João Leandro"
            />
          </div>
        </section>

        <section className="max-w-[1464px] w-[80%] mt-20 m-auto text-center">
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

        <section className="max-w-[1464px] w-[80%] text-center mt-28 m-auto">
          <h2 className="text-shadow uppercase mb-7 font-bold text-3xl text-white">Projetos</h2>
          <div className="flex gap-6 flex-wrap justify-around max_1024:gap-y-10">
            <CardProject 
              src="/assets/game-pikachu.png" 
              alt="Game do Pikachu" 
              github="https://github.com/JoaoLeandroo/game-pikachu"
              deploy="https://joaoleandroo.github.io/game-pikachu/"
            />
            
            <CardProject 
              src="/assets/star-wars.png" 
              alt="Projeto Star Wars a ordem Cronologica" 
              github="https://github.com/JoaoLeandroo/page-star_wars-ordem_cronologica"
              deploy="https://joaoleandroo.github.io/page-star_wars-ordem_cronologica/"
            />

            <CardProject 
              src="/assets/cristiano.png" 
              alt="Projeto Cristiano Ronaldo" 
              github="https://github.com/JoaoLeandroo/cristiano_ronaldo_page"
              deploy="https://joaoleandroo.github.io/cristiano_ronaldo_page/"
            />

            <CardProject 
              src="/assets/jogo-velha.png" 
              alt="Projeto Jogo da Velha" 
              github="https://github.com/JoaoLeandroo/jogo-da-velha"
              deploy="https://joaoleandroo.github.io/jogo-da-velha/"
            />

          <CardProject 
              src="/assets/cep.png" 
              alt="Projeto Buscador de CEP" 
              github="https://github.com/JoaoLeandroo/buscador-cep-react"
              deploy="https://buscador-cep-react-six.vercel.app/"
            />

            <CardProject 
              src="/assets/movies.png" 
              alt="Projeto filmes" 
              github="https://github.com/JoaoLeandroo/project-movies"
              deploy="https://jl-movies.netlify.app/"
            />

            <CardProject 
              src="/assets/medusa.png" 
              alt="Projeto home page Medusa" 
              github="https://github.com/JoaoLeandroo/page-medusa"
              deploy="https://page-medusa.vercel.app/"
            />
            
            <CardProject 
              src="/assets/luffy.png" 
              alt="Projeto Luffy Gear Five" 
              github="https://github.com/JoaoLeandroo/luffy-gear-five"
              deploy="https://joaoleandroo.github.io/luffy-gear-five/"
            />
          </div>
        </section>

      </main>
      <Footer/>
    </>
  )
}