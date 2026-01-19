import { ReactNode } from "react";

type ButtonRoxoProps = {
  children: ReactNode;
};

export default function ButtonRoxo(props: ButtonRoxoProps) {
  return (
    <button className="w-full py-4 rounded-full text-white text-lg font-semibold 
        bg-gradient-to-r from-indigo-500 to-purple-500 
        hover:opacity-90 transition mb-4">
      {props.children}
    </button>
  )
  
}