import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { myProjects } from "@/app/utils/projects";

export function Projects() {
  return (
    <section id="projects" className="container mt-32 xl:max-w-7xl mx-auto">
      <div className="flex flex-col items-center">
        <p className="text-center text-4xl font-bold text-pink-600">
          Meus Projetos
        </p>
        <p className="text-center text-muted-foreground mt-10 text-lg">
          Projetos desenvolvidos durante minha jornada
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-15">
          {myProjects.map((project) => (
            <Card key={project.id} className="w-full h-full pt-0 relative">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover rounded-t-md h-[200px] border-b-2 border-gray-500 border-solid" 
              />
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-md text-muted-foreground mt-4 mb-4 text-justify">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-end text-pink-700 cursor-pointer hover:text-pink-200 flex items-center justify-end absolute bottom-4 right-6"
                >
                  Ver Projeto
                  <ArrowUpRight className="inline-block ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
