import Image from "next/image";
import Link from 'next/link';

type Props = {}

function Header({}: Props) {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
        <div className="flex space-x-2 items-center">
        <Image
          src="https://www.svgrepo.com/show/306500/openai.svg"
          alt="logo"
          height={30}
          width={30}
        />
        
        <div>
            <h1 className="font-bold">
                The kid's <span className="text-violet-500"> AI</span> Image Generator
            </h1>
            <h2 className="text-sx">
                Powered by DALL-E 2, Chat GPT & Microsoft Azure
            </h2>
        </div>
        </div>
        <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
          <Link href="https://www.google.com"
            className="px-2 font-light text-right"
          >
            wanna be friends with me?
          </Link> 
          <Link href="https://www.github.com/1js2002/"
            className="px-2 font-light" >
              Github repo
          </Link> 
        </div>

    </header>
  )
}

export default Header