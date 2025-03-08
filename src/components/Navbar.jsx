import React, { useEffect } from "react";

const Navbar = ({ menuopen, setmenuopen }) => {
  // Toggle body scroll only when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuopen ? "hidden" : "auto";
  }, [menuopen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgb(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Rayyan<span className="text-blue-500">.Teach</span>
          </a>
          {/* IMPORTANT: Wrap setmenuopen in an arrow function */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setmenuopen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-color"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-color"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-color"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-color"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
