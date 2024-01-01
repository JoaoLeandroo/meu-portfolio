"use client"

import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Header() {

    window.addEventListener('scroll', function() {
        let posicaoScroll =  document.documentElement.scrollTop || document.body.scrollTop;
        const header =  document.querySelector("header")
        if (posicaoScroll === 0) {
          header.style.background = '#7401DF'
        } else {
          header.style.background = '#7401DFa1'
        }
      })

    return(
        <header className="w-screen h-12 bg-secundary-purple fixed top-0 z-50">
            <nav className="h-full max-w-[1464px] w-[80%] m-auto flex gap-4 items-center justify-end">
                <Link href={"https://github.com/JoaoLeandroo"} target="blank" title="Github">
                    <FaGithub size={30} color="#fff"/>
                </Link>
                <Link href={"https://www.instagram.com/joaoleandroo_/?hl=pt"} target="blank" title="Instagram">
                    <FaInstagram size={30} color="#fff"/>
                </Link>
                <Link href={"https://www.linkedin.com/in/jo%C3%A3o-leandro-2b83b4209/"} target="blank" title="Linkedin">
                    <FaLinkedin size={30} color="#fff"/>
                </Link>
            </nav>
        </header>   
    )
}