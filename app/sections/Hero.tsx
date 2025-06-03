import Image from "next/image";
import ArrowDown from "../../public/arrow-down.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col h-screen justify-center container mx-auto px-4">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-row text-5xl md:text-8xl font-bold gap-2">
          <span className="text-gray-800 opacity-80">Caroline</span>
          <span className="text-pink-500">Marchesin</span>
        </div>

        <div className="flex flex-row text-2xl md:text-5xl mt-6">
          <span className="text-gray-800 opacity-70">Front-end Developer</span>
        </div>

        <div className="flex flex-row text-[14px] md:text-[16px] gap-6 mt-14">
          <Link
            href="#about"
            className="bg-pink-500 rounded-full px-3 py-3 md:px-5 md:py-4 text-white font-bold cursor-pointer hover:bg-pink-600 transition duration-300"
          >
            Conheça meu trabalho
          </Link>

          {/* <Link
            href="#"
            className="border-2 border-pink-500 rounded-full px-6 py-3 md:px-10 md:py-4 text-gray-800 opacity-70 cursor-pointer hover:text-gray-950 transition duration-300"
          >
            Entre em contato
          </Link> */}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <Image
          src={ArrowDown}
          alt="Arrow Down"
          className="animate-bounce"
          width={40}
          height={40}
        />
      </div>
    </section>
  );
}
