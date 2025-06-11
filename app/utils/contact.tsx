import { Github, Linkedin, Mail, LucideIcon } from "lucide-react";

export interface ContactItem {
  title: string;
  value: string;
  icon: LucideIcon;
}

export const itemsContact: ContactItem[] = [
  {
    title: "Email",
    value: "carol_marchesin@hotmail.com",
    icon: Mail,
  },
  {
    title: "GitHub",
    value: "github.com/CarolMarchesin",
    icon: Github,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/carolinemarchesindasilva",
    icon: Linkedin,
  },
];