import React from "react";
import { Link } from "react-router-dom";
import { Info, skills } from "./data/projects";

const Portfolio = () => {
  return (
    <>
      <div className="w-full max-w-4xl flex flex-wrap gap-6 mt-8">
        <div className="bg-gray-800 p-6 rounded-3xl shadow-xl flex-1 min-w-[300px]">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-300">
          {Info}
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-3xl shadow-xl flex-1 min-w-[300px]">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="text-gray-300 list-disc list-inside space-y-2">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Projects</h2>
        <div className="bg-gray-800 p-6 rounded-3xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2">Projects</h3>
          <p className="text-gray-300">I have built a variety of projects, including a simple calculator, a Twitter clone, a random quote generator, and a product store. Click below to explore my work in detail.</p>
          <Link to="/Project" className="text-blue-400 mt-2 inline-block hover:text-blue-300">View Project</Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
