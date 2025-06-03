import Button from "../components/Button";

export default function Skills() {
  const Skills = [
    "React",
    "Next.js",
    "Vue",
    "Quasar",
    "React Native",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Git",
    "GitHub",
    "Figma",
    "UX/UI Design",
    "Teste Unitário",
  ];

  const renderSkills = Skills.map((skill) => (
    <Button
      key={skill}
      title={skill}
      variant="secondary"
      className="mb-4 bg-white hover:bg-gray-100"
    />
  ));

  return (
    <section className="min-h-screen relative flex flex-col bg-pink-100 container mx-auto px-4 py-10 items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-2 font-bold text-4xl md:text-5xl">
        <span className="text-gray-800 opacity-80">Habilidades</span>
        <span className="text-pink-500">Técnicas</span>
      </div>

      <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-6xl">
        {renderSkills}
      </div>
    </section>
  );
}
