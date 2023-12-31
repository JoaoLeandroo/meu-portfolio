import Image from "next/image"
import Header from "./components/Header/page"
import {  IoLogoJavascript, 
          IoLogoHtml5, 
          IoLogoCss3,
          IoLogoPython,
          IoLogoFigma
} from "react-icons/io5"
import {  TbBrandTailwind, TbBrandNextjs } from "react-icons/tb"
import { FaReact, FaGitSquare, FaGithubSquare } from 'react-icons/fa'

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
          <div className="w-full h-24 bg-secundary-purple rounded-lg">
            <div className="w-full h-full flex items-center gap-11 justify-center">
              <IoLogoPython size={60} color="#2ECCFA" title="Python" className="icons-animation"/>
              <IoLogoFigma size={60} color="#FE2EF7" title="Figma" className="icons-animation"/>
              <IoLogoHtml5 size={60} color="#FF8000" title="HTML5" className="icons-animation"/>
              <IoLogoCss3 size={60} color="#0101DF" title="CSS3" className="icons-animation"/>
              <TbBrandTailwind size={60} color="#00FFFF" title="Tailwind" className="icons-animation"/>
              <IoLogoJavascript size={60} color="#FFFF00" title="JavaScript" className="icons-animation"/>
              <FaReact size={60} color="#00FFFF" title="React" className="icons-animation"/>
              <TbBrandNextjs size={60} color="#FFFFFF" title="NextJS" className="icons-animation"/>
              <FaGitSquare size={60} color="#FF8000" title="Git" className="icons-animation"/>
              <FaGithubSquare size={60} color="#000000" title="GitHub" className="icons-animation"/>
          </div>
          </div>
        </section>
      </main>
    </>
  )
}