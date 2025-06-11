import { GraduationCap, Briefcase, LucideIcon } from "lucide-react";

export interface AboutItem {
  title: string;
  value: string;
  additional: string;
  icon: LucideIcon;
}

export const itemsAbout: AboutItem[] = [
  {
    title: "Formação",
    value: "Segurança da Informação",
    additional: "Fatec Americana (2022 - 2024)",
    icon: GraduationCap,
  },
  {
    title: "Trabalho",
    value: "Desenvolvedora de Software",
    additional: "Qyon Tecnologia (2022 - Atual)",
    icon: Briefcase,
  },
];