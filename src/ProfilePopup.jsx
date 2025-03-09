import React from "react";
import Footer from "./Footer";

export default function ProfilePopup  ({ isOpen, onClose })  {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center border border-gray-800 shadow-2xl p-4 ">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-96 text-center relative  border border-gray-900 ">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl"
        >
          &times;
        </button>

        <img
          src="/bhuvanesh.JPG"
          alt="Bhuvanesh B"
          className="w-32 h-32 rounded-2xl mx-auto border-2 border-gray-500"
        />
        <h2 className="text-2xl font-bold mt-3">Bhuvanesh B</h2>
        <p className="text-gray-400">B.Pharm | MERN Stack Developer</p>

        <p className="mt-3 text-gray-300">
          Passionate about programming and web development.
        </p>

        <Footer />
      </div>
    </div>
  );
};
