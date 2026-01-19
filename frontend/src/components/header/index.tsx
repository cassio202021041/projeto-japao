
"use client";
import React, { useState, useRef } from "react";
import Button from "../button";

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="w-full py-2 text-white text-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition mb-2">
      <nav className="dsc-container">
        <div className="flex justify-center gap-6 text-gray-500 dark:text-gray-400 font-medium mb-2">
          <span className="relative text-gray-900 dark:text-white">
            <h1>Início</h1>
          </span>
        </div>
        <div className="flex justify-center gap-6 text-gray-500 dark:text-gray-400 font-medium mb-2">
          <span className="relative text-gray-900 dark:text-white">
            <h1>Apredizado</h1>
          </span>
        </div>

        <div className="flex justify-center gap-6 text-gray-500 dark:text-gray-400 font-medium mb-2">
          <span className="relative text-gray-900 dark:text-white">
            <h1>Exercícios</h1>
          </span>
        </div>
        <div className="flex justify-center gap-6 text-gray-500 dark:text-gray-400 font-medium mb-2 relative" ref={dropdownRef}>
          <span
            className="relative text-gray-900 dark:text-white cursor-pointer select-none"
            onClick={() => setDropdownOpen((open) => !open)}
            tabIndex={0}
          >
            <h1>Sobre o Japão</h1>
            {dropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 min-w-[180px] rounded-lg shadow-lg z-50 bg-gradient-to-r from-indigo-500 to-purple-500 text-white animate-fade-in">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-indigo-600 cursor-pointer transition">Historia Japão</li>
                  <li className="px-4 py-2 hover:bg-purple-600 cursor-pointer transition">Historia Idioma</li>
                  <li className="px-4 py-2 hover:bg-indigo-600 cursor-pointer transition">Manga</li>
                  <li className="px-4 py-2 hover:bg-purple-600 cursor-pointer transition">Anime</li>
                </ul>
              </div>
            )}
          </span>
        </div>
         
        <div className="flex justify-center  text-gray-500 dark:text-gray-400 font-medium mb-2">
            <Button>
            Entrar
          </Button>
          <span className="relative text-gray-900 dark:text-white">          
            <img
                    src="/assets/logo/mini.svg"
                    alt="Flow"
                    style={{ width: 72, height: 72
                     }}
                />
          </span>
        

           
        </div>   

      </nav>
    </header>
    
  );
};

export default Header;
