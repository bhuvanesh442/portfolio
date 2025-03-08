import React from "react";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between p-1 border-b-3 border-gray-700 sticky top-0 bg-gray-900 z-10 ">
      <div className="flex flex-col items-center flex-grow">
        <h1 className="text-4xl font-bold text-center">Bhuvanesh B</h1>
        <p className="text-lg text-gray-400">MERN Stack Developer</p>
      </div>
      <img
        src="/path-to-your-image.jpg"
        alt="Bhuvanesh B"
        className="w-16 h-16 rounded-full border-3 border-gray-700"
      />
    </div>
  );
}
