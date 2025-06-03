import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({
  title,
  className,
  variant,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "primary"
          ? "bg-pink-500 text-white hover:bg-pink-600 transition duration-300"
          : "border-2 border-pink-500 text-gray-800 opacity-70 hover:text-gray-950 transition duration-300"
      } rounded-full px-10 py-4 font-bold cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
}
