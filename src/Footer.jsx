import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
   
     <>
  <div className="mt-10 flex justify-between items-center border-t-3 p-4 pb-0 border-gray-700 w-full">
    <a 
      href="https://github.com/bhuvanesh442/your-repo-name" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-400 text-md hover:text-white transition-all duration-300"
    >
      Source Code
    </a>

    <div className="flex justify-center space-x-6">
      <a 
        href="https://github.com/bhuvanesh442" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 text-2xl hover:text-white transition-all duration-300"
      >
        <FaGithub />
      </a>
      <a 
        href="https://www.linkedin.com/in/b-bhuvanesh/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 text-2xl hover:text-white transition-all duration-300"
      >
        <FaLinkedin />
      </a>
      <a 
        href="https://mail.google.com/mail/u/0/#inbox?compose=new" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 text-2xl hover:text-white transition-all duration-300"
      >
        <FaEnvelope />
      </a>
    </div>
  </div>
</>


  )
}
