import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
   
        <div className="mt-10 flex space-x-4">
              <a href="#" className="text-gray-400 text-2xl hover:text-white transition-all duration-300"><FaGithub /></a>
              <a href="#" className="text-gray-400 text-2xl hover:text-white transition-all duration-300"><FaLinkedin /></a>
              <a href="#" className="text-gray-400 text-2xl hover:text-white transition-all duration-300"><FaEnvelope /></a>
        </div>
   
  )
}
