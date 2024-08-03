import React from "react";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPage from "./pages/AllPage";

const App = () => {
  return (
    <BrowserRouter>
      <AllPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
