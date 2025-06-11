import ContaAzul from "@/app/assets/images/contaazul.png";
import Imc from "@/app/assets/images/imc.webp";
import Forca from "@/app/assets/images/forca.webp";
import type { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

export const myProjects: Project[] = [
  {
    id: 1,
    title: "Conta Azul",
    description:
      "Projeto de cópia do site Conta Azul, desenvolvido com Javascript, React, Tailwind CSS e Next.js. Criado para praticar habilidades de front-end e design responsivo.",
    image: ContaAzul,
    link: "https://conta-azul.vercel.app/",
  },
  {
    id: 2,
    title: "Calculadora de IMC",
    description:
      "Calculadora de IMC (Índice de Massa Corporal) com base na altura e peso do usuário. Desenvolvida com Javascript, HTML e CSS.",
    image: Imc,
    link: "https://github.com/CarolMarchesin/calculate-your-IMC",
  },
  {
    id: 3,
    title: "Jogo da Forca",
    description:
      "Jogo da Forca interativo, onde o usuário deve adivinhar uma palavra secreta letra por letra. Desenvolvido em Python, com foco em lógica de programação e experiência do usuário.",
    image: Forca,
    link: "https://github.com/CarolMarchesin/hangman_game",
  },
];