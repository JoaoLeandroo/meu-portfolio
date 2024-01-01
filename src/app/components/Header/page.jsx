
export default function Header() {
    return(
        <header className="w-screen h-10 bg-secundary-purple fixed top-0 z-50">
            <nav className="w-full h-full max-w-[1920px] m-auto">
                <ul className="w-full h-full text-white flex items-center justify-center gap-3">
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li>Skills</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>   
    )
}