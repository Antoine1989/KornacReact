import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./pages/contact";
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;