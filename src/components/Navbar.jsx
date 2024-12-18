import React, { useState } from "react";

const Navbar = ({ links }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => setIsActive(!isActive);

  return (
    <nav
      className={`float-right mr-6 mt-10 text-lg h-full relative z-10 text-white px-8 py-8 transition-all duration-500 ${
        isActive ? "h-full" : "h-auto"
      }`}
    >
      <button
        id="toggle"
        className="icon relative h-8 w-8 bg-transparent border-none cursor-pointer mx-8 mb-8"
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
      >
        <div
          className={`line line1 bg-white absolute h-1 w-10 top-2 -left-1 transition-transform duration-600 ${
            isActive
              ? "rotate-[135deg] translate-y-[6px]"
              : "rotate-0 translate-y-0"
          }`}
        ></div>

        <div
          className={`line line2 bg-white absolute h-1 w-10 bottom-2 -left-1 transition-transform duration-600 ${
            isActive
              ? "rotate-[765deg] translate-y-[-5.5px]"
              : "rotate-0 translate-y-0"
          }`}
        ></div>
      </button>

      <ul
        className={`flex flex-col items-center gap-4 mt-8 transition-all duration-700 ${
          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link, index) => (
          <li key={index} className="transition-transform hover:scale-110">
            <a href={link.href}
              className="text-white hover:text-gray-400 transition-colors duration-300">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      
      <button
        id="signin"
        className={`w-full mt-4 p-1 bg-black rounded-2xl hover:bg-slate-800 transform hover:scale-110 transition-all duration-1000 ${
          isActive ? "opacity-100 " : "opacity-0 "
        }`}
      >
        Sign in
      </button>
    </nav>
  );
};

export default Navbar;
