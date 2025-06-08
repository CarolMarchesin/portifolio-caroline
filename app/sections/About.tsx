"use client";

import Image from "next/image";
import profilePic from "../assets/images/profile.jpg";
import moment from "moment";
import { useEffect, useState } from "react";

export default function About() {
  const [yearsOfExperience, setYearsOfExperience] = useState<number>(0);

  function calculateYearsOfExperience(): void {
    const startYear = 2022;
    const currentYear = moment().year();
    const yearsOfExperience = currentYear - startYear;

    setYearsOfExperience(yearsOfExperience);
  }

  useEffect(() => {
    calculateYearsOfExperience();
  }, []);

  return (
    <section id="about" className="container mt-32 xl:max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 items-center justify-items-center gap-10">
        <div className="mx-auto relative flex items-center justify-center w-78 h-78">
          <div className="absolute inset-0 bg-pink-500 rounded-full blur-lg z-0 opacity-75" />
          <Image
            src={profilePic}
            alt="Caroline Marchesin"
            className="rounded-full w-64 h-64 z-10 object-cover"
            width={256}
            height={256}
          />
        </div>

        <div>
          <p className="flex-1 text-4xl font-bold text-pink-600 mx-10 text-center md:text-left">
            Sobre Mim
          </p>

          <div className=" text-muted-foreground text-lg mx-10 mt-10 text-justify">
            <p>
              Olá! Sou Caroline Marchesin, desenvolvedora front-end apaixonada
              por criar soluções digitais elegantes e funcionais. Com{" "}
              {yearsOfExperience} anos de experiência, atuo no desenvolvimento
              web e mobile, utilizando tecnologias e ferramentas modernas.
            </p>

            <br />

            <p>
              Minha trajetória começou no back-end, com RPAs e automações, mas
              foi no front-end que descobri minha verdadeira paixão. Desde
              então, venho me especializando e aprimorando constantemente minhas
              habilidades.
            </p>

            <br />

            <p>
              Acredito que estética e usabilidade são essenciais para uma boa
              experiência digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
