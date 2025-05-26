import Image from "next/image";
import ArrowDown from "../../public/arrow-down.svg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col h-screen items-center justify-center">
        <div className="flex flex-row text-6xl md:text-8xl font-bold gap-2">
          <span className="text-gray-800 opacity-80">Caroline</span>
          <span className="text-pink-500">Marchesin</span>
        </div>

        <div className="flex flex-row text-3xl md:text-5xl mt-4">
          <span className="text-gray-800 opacity-70">Front-end Developer</span>
        </div>

        <div className="flex flex-row text-1xl md:text-[16px] gap-6 mt-10">
          <div className="bg-pink-500 rounded-full px-5 py-4 text-white font-bold cursor-pointer hover:bg-pink-600 transition duration-300">
            Conheça meu trabalho
          </div>

          <div className="border-2 border-pink-500 rounded-full px-10 py-4 text-gray-800 opacity-70 cursor-pointer hover:text-gray-950 transition duration-300">
            Entre em contato
          </div>
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
