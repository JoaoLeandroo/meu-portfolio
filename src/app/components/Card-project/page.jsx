import Image from "next/image"
import Link from "next/link"

export default function CardProject(props) {
    return(
        <article className="box-shadow w-60 h-60 bg-secundary-purple flex flex-col rounded-lg">
            <figure className="w-full h-[80%] rounded-t-lg">
                <Image
                    src={props.src}
                    width={240}
                    height={240}
                    alt={props.alt}
                    className="rounded-lg"
                />
            </figure>
            <div className="w-full h-[20%]  flex text-white">
                <span className="bg-primary-purple w-[120px] flex items-center justify-center font-semibold cursor-pointer rounded-bl-lg border-r transition-all duration-500 ease-in-out hover:bg-purple-950 border-solid border-white uppercase">
                    <Link href={`${props.github}`} target="blank" className="w-full h-full flex items-center justify-center">Github</Link>
                </span>
                <span className="bg-primary-purple w-[120px] flex items-center justify-center font-semibold cursor-pointer rounded-br-lg transition-all duration-500 ease-in-out hover:bg-purple-950 uppercase">
                    <Link href={`${props.deploy}`} target="blank" className="w-full h-full flex items-center justify-center">Deploy</Link>
                </span>
            </div>
        </article>
    )
}