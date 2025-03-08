import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
   
      <div className="mt-10 flex justify-center space-x-4 border-t-3 p-4 pb-0 border-gray-700 w-[100%]">
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
    
   
  )
}
