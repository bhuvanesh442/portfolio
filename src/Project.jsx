import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { projects } from "./data/projects";


const Project = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start p-4 mt-0 w-[100%] relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-2 left-2 sm:top-4 sm:left-4 flex items-center text-gray-400 hover:text-white text-sm sm:text-lg transition-all p-1 sm:p-2"
      >
        <FaArrowLeft className="mr-1 sm:mr-2 text-base sm:text-lg" />
        <span className="hidden sm:inline">Home</span>
      </button>

      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
        Projects
      </h2>
      <div className="w-full max-w-2xl flex flex-col gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-3xl shadow-xl w-full"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-2xl hover:text-white transition-all duration-300"
            >
              {project.title}
            </a>
            <p className="text-gray-300">
              {project.description}
              {expandedIndex === index && (
                <span> {project.fullDescription}</span>
              )}
            </p>
            <button
              onClick={() => toggleExpand(index)}
              className="mt-4 px-6 py-2 bg-gray-700 text-white font-semibold rounded-xl hover:bg-gray-600 transition-all"
            >
              {expandedIndex === index ? "Read Less" : "See More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
