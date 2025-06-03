import { Footer } from "./components/Footer";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-white">
        <Hero />
        <About />
        <Skills />
      <Footer />
    </main>
  );
}
