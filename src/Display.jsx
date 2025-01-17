import React from "react";
import { Navbar, Footer } from "./Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, FAQ, Testimonials } from "./Pages";

const Display = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Display;
