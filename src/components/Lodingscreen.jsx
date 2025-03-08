import React, { useEffect, useState } from "react";

const Lodingscreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< Loading.../>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 text-gray-100">
      <div className="mb-4 text-4xl font-mono font-bold">{text}</div>

      <div className="w-[200px] h-[4px] bg-gray-800 rounded overflow-hidden">
        <div className="progress-bar w-[40%] h-full bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Lodingscreen;
