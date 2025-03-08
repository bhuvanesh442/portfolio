import React from "react";

export default function Project() {
  return (
    <>
    <div className="w-full max-w-4xl flex flex-wrap gap-6 mt-8">
      <div className="bg-gray-800 p-6 rounded-3xl shadow-xl flex-1 min-w-[300px]">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-300">
          Passionate MERN stack developer skilled in building responsive and scalable web applications using MongoDB, Express.js, React, and Node.js.
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
        <h3 className="text-xl font-semibold mb-2">Project Name</h3>
        <p className="text-gray-300">Brief description of the project showcasing your skills.</p>
       
      </div>
    </div>
  </>
  );
}
