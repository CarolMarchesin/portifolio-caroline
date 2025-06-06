"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MouseIcon } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Desenvolvedora Front-End";

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setText(fullText.slice(0, index));

      index++;

      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen container mt-32">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-row md:flex-row text-6xl md:text-8xl font-bold">
          <span>Olá, eu sou</span>
        </div>

        <div className="flex flex-col md:flex-row text-6xl md:text-8xl font-bold gap-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-500">
            Caroline Marchesin
          </span>
        </div>

        <motion.div
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-mono">{text}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Especializado em criar experiências digitais excepcionais com tecnologias modernas
        </motion.p>

        <motion.div
          className="flex flex-row items-center justify-center mt-8 gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button asChild className="bg-pink-600 text-white hover:bg-pink-700 h-10 w-40">
            <Link href="/contact">Entrar em contato</Link>
          </Button>
          
          <Button asChild variant="outline" className="text-pink-600 border-pink-600 h-10 w-40 bg-transparent border">
            <Link href="/projects">Ver projetos</Link>
          </Button>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
        >
          <MouseIcon className="w-10 h-10 text-pink-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
