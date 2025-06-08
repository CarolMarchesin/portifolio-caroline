"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SkillsGroup } from "../utils/skills"

export default function Skills() {
  return (
    <section id="skills" className="container mt-32 xl:max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <p className="text-4xl font-bold text-pink-600">Minhas Habilidades</p>
        <p className="text-muted-foreground mt-10 text-lg">
          Tecnologias e ferramentas utilizadas durante minha jornada
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-15">
          {SkillsGroup.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Button
                key={skill.name}
                variant="outline"
                className="w-70 h-full p-8 flex flex-col gap-2 justify-start items-start"
              >
                <div className="flex flex-row items-center gap-2 justify-start w-full">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-400 shadow-lg">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg text-white font-bold">{skill.name}</p>
                </div>

                {skill.itens && (
                  <ul className="list-disc list-inside text-muted-foreground text-lg mt-2 text-left marker:text-pink-400">
                    {skill.itens.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
