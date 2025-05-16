import Image from "next/image";
import ArrowDown from "../public/arrow-down.svg";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-200">
      <section>
        <div className="flex flex-col h-screen items-center justify-center">
          <div className="flex flex-row text-6xl md:text-7xl font-bold gap-2">
            <text className="text-gray-800 opacity-80">Caroline</text>
            <text className="text-pink-500">Marchesin</text>
          </div>

          <div className="flex flex-row text-3xl md:text-4xl mt-2">
            <text className="text-gray-800 opacity-70">
              Front-end Developer
            </text>
          </div>

          <div className="flex flex-row text-1xl md:text-[16px] gap-4 mt-8">
            <div className="bg-pink-500 rounded-full px-5 py-3 text-white font-bold cursor-pointer hover:bg-pink-600 transition duration-300">
              Conheça meu trabalho
            </div>

            <div className="border-2 border-pink-500 rounded-full px-10 py-3 text-gray-800 opacity-70 cursor-pointer hover:text-gray-950 transition duration-300">
              Entre em contato
            </div>
          </div>

          <Image
            src={ArrowDown}
            alt="seta para baixo"
            className="flex flex-row mt-20 size-6 animate-bounce rounded-full"
          />
        </div>
      </section>
    </main>
  );
}
