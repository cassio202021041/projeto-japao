import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  text?: string;
  type?: "primary" | "secondary" | "outline" | "danger";
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  className?: string;
};

const base = "font-bold py-2 px-4 rounded focus:outline-none transition-colors duration-200";
const variants: Record<string, string> = {
  primary: "bg-blue-500 hover:bg-blue-400 text-white border-b-4 border-blue-700 hover:border-blue-500",
  secondary: "bg-gray-500 hover:bg-gray-400 text-white border-b-4 border-gray-700 hover:border-gray-500",
  outline: "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent",
  danger: "bg-red-500 hover:bg-red-400 text-white border-b-4 border-red-700 hover:border-red-500",
};

export default function Button({
  children,
  text = "Button",
  type = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[type] || variants.primary} ${className}`.trim()}
      onClick={onClick}
    >
      {children ? children : text}
    </button>
  );
}
