import { Code, Database, Globe, Palette, Smartphone, Zap, LucideIcon } from "lucide-react";

export interface SkillGroup {
  name: string;
  icon: LucideIcon;
  itens: string[];
}

export const SkillsGroup: SkillGroup[] = [
  {
    name: "Front-End",
    icon: Globe,
    itens: [
      "HTML / CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Quasar",
      "Tailwind CSS",
    ],
  },
  {
    name: "Back-End",
    icon: Database,
    itens: ["Python", "Elixir", "REST APIs", "MySQL"],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    itens: ["React Native", "Expo"],
  },
  {
    name: "Design",
    icon: Palette,
    itens: ["UI/UX Design", "Figma"],
  },
  {
    name: "DevOps",
    icon: Zap,
    itens: ["Git", "GitHub", "AWS"],
  },
  {
    name: "Tools",
    icon: Code,
    itens: ["Postman", "Jest", "Vitest"],
  },
];