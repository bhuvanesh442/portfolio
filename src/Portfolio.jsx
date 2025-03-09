import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <div className="w-full max-w-4xl flex flex-wrap gap-6 mt-8">
        <div className="bg-gray-800 p-6 rounded-3xl shadow-xl flex-1 min-w-[300px]">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-300">
          I am a passionate MERN Stack Developer with a strong foundation in React, Node.js, Express, and MongoDB. I enjoy building dynamic and scalable web applications, solving complex problems, and writing clean, efficient code. My focus is on creating seamless user experiences while continuously learning and improving my skills in modern web technologies.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-3xl shadow-xl flex-1 min-w-[300px]">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="text-gray-300 list-disc list-inside space-y-2">
            <li>React.js, Tailwind CSS</li>
            <li>Node.js, Express.js</li>
            <li>MongoDB, Mongoose</li>
            <li>REST APIs, Authentication</li>
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
