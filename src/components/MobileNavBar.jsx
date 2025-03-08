import React from "react";

const MobileNavBar = ({ menuopen, setmenuopen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
      transition-all duration-300 ease-in-out
      ${
        menuopen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setmenuopen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        ×
      </button>

      <div className="flex flex-col items-center space-y-8">
        <a
          href="#home"
          onClick={() => setmenuopen(false)}
          className={`text-2xl font-semibold text-white my-4 ${
            menuopen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } transition-transform duration-300`}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setmenuopen(false)}
          className={`text-2xl font-semibold text-white my-4 ${
            menuopen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } transition-transform duration-300`}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setmenuopen(false)}
          className={`text-2xl font-semibold text-white my-4 ${
            menuopen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } transition-transform duration-300`}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setmenuopen(false)}
          className={`text-2xl font-semibold text-white my-4 ${
            menuopen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } transition-transform duration-300`}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default MobileNavBar;
