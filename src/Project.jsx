import React, { useState } from "react";

const projects = [
  { 
    title: "Portfolio Website", 
    description: "A personal website to showcase my projects.", 
    fullDescription: "Built using React and Tailwind CSS, this portfolio highlights my skills, projects, and experiences with a responsive UI."
  },
  { 
    title: "E-Commerce App", 
    description: "A full-stack MERN e-commerce platform.", 
    fullDescription: "Developed using MongoDB, Express.js, React, and Node.js, featuring authentication, cart functionality, and payment integration."
  },
  { 
    title: "Chat App", 
    description: "A real-time chat application using WebSockets.", 
    fullDescription: "Implemented with WebSockets and Socket.io for real-time messaging, including user authentication and chat room functionalities."
  }
];

const Project = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start p-4 mt-0 w-[100%]">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="w-full max-w-2xl flex flex-col gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-3xl shadow-xl w-full">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300">
              {project.description}
              {expandedIndex === index && <span> {project.fullDescription}</span>}
            </p>
            <button
              onClick={() => toggleExpand(index)}
              className="mt-4 px-6 py-2 bg-gray-700 weith text-white font-semibold rounded-xl hover:bg-gray-600 transition-all"
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
