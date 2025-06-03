import Image from "next/image";
import profilePic from "../assets/images/profile.jpg";
import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen relative flex flex-col container mx-auto px-4 py-10 items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-2 font-bold text-4xl md:text-5xl">
        <span className="text-gray-800 opacity-80">Sobre </span>
        <span className="text-pink-500">Mim</span>
      </div>

      <div className="flex flex-col text-center md:text-left md:flex-row mt-10 gap-12 items-center justify-center mx-auto max-w-6xl ">
        <div>
          <div className="bg-white w-80 h-80 rounded-full border-4 border-pink-300 shadow-lg shadow-pink-300">
            <Image
              src={profilePic}
              alt="Profile Picture"
              className="rounded-full w-78 h-78 object-cover"
            />
          </div>
        </div>

        <div className="text-gray-800 opacity-70 text-lg md:text-xl leading-relaxed">
          <p className="mb-6 font-bold">
              Olá, eu sou a Caroline Marchesin da Silva!
          </p>

          <p>
            Sou desenvolvedora front-end e adoro transformar ideias em
            experiências digitais incríveis, permitindo que todos aproveitem a
            tecnologia de forma simples e intuitiva.
          </p>
          
          <p className="mt-4">
            Com experiência em HTML, CSS, Vue, React, React Native e design de
            interfaces, trabalho criando aplicações web e mobile que aliam
            beleza, desempenho e usabilidade.
          </p>

          <br />

          <div className="flex justify-center md:justify-start gap-4 pb-10">
            <a
              href="https://github.com/CarolMarchesin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-pink-500 hover:text-pink-600 transition-colors"
            >
              <Github size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/carolinemarchesindasilva/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-pink-500 hover:text-pink-600 transition-colors"
            >
              <Linkedin size={26} />
            </a>
            <a
              href="mailto:carol_marchesin@hotmail.com"
              className="p-2 text-pink-500 hover:text-pink-600 transition-colors"
            >
              <Mail size={26} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
