import { ModeToggle } from "../components/ui/theme/ToggleMode";
import { Footer } from "../components/Footer";
import About from "./sections/About";
import { Contact } from "./sections/Contact";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import { Projects } from "./sections/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 text-foreground relative overflow-hidden">
       <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-84 h-84 bg-pink-600/20 dark:bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-700/20 dark:bg-rose-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-500/10 dark:bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="fixed top-6 right-6 z-50">
        <ModeToggle />
      </div>

      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
