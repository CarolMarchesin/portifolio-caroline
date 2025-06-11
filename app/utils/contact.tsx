import { Github, Linkedin, Mail, LucideIcon } from "lucide-react";

export interface ContactItem {
  title: string;
  value: string;
  link: string;
  icon: LucideIcon;
}

export const itemsContact: ContactItem[] = [
  {
    title: "Email",
    value: "carol_marchesin@hotmail.com",
    link: "mailto: carol_marchesin@hotmail.com",
    icon: Mail,
  },
  {
    title: "GitHub",
    value: "github.com/CarolMarchesin",
    link: "https://github.com/CarolMarchesin",
    icon: Github,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/carolinemarchesindasilva",
    link: "https://www.linkedin.com/in/carolinemarchesindasilva",
    icon: Linkedin,
  },
];