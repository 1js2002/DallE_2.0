import Image from "next/image";

type Props = {}

function Header({}: Props) {
  return (
    <header>
        <div>
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
    </header>
  )
}

export default Header