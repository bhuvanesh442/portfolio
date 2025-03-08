import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import Project from "./Project";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  return (
    <Router>
       <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <Header/>
      <Routes>
        <Route path="/" element={<Portfolio />} />
         <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
