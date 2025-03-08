import React from "react";
import ReviewOnScroll from "../Reviewonscroll"; // Fixed import

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center relative"
    >
      <ReviewOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi there! I'm Rayyan Ali
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I am a passionate React developer with expertise in React.js and
            React Native, specializing in building full-scale applications and
            stunning web pages. With a keen eye for design and performance, I
            craft dynamic, responsive, and highly interactive user interfaces.
            Whether it's single-page applications, mobile apps, or
            enterprise-level solutions, I am dedicated to delivering seamless,
            scalable, and efficient digital experiences.
          </p>

          {/* Buttons Fix */}
          <div className="flex justify-center space-x-6">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Home;
