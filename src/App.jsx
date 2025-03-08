import React, { useState } from "react";
import Lodingscreen from "./components/Lodingscreen";
import MobileNavBar from "./components/MobileNavBar";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Contacts from "./components/sections/Contacts";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Welcome from "./components/sections/Welcome";
import "./index.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuopen, setmenuopen] = useState(false);

  return (
    <>
      {!isLoaded && <Lodingscreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Welcome />
        <Navbar menuopen={menuopen} setmenuopen={setmenuopen} />
        <MobileNavBar menuopen={menuopen} setmenuopen={setmenuopen} />
        <Home />
        <About />
        <Projects />
        <Contacts />
      </div>
    </>
  );
};

export default App;
