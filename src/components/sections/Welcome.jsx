import React from "react";

const Welcome = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Welcome
        </h1>
        <p className="text-gray-400 text-lg mt-4">
          Experience the journey of a passionate developer.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
