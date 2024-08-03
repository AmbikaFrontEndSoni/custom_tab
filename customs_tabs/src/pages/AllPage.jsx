import React from "react";
// import Home from "../src/components/Home";
// import About from "../src/components/About";
// import Contact from "../src/components/Contact";
import { NavLink } from "react-router-dom";

const AllPage = () => {
  return (
    <div>
      <button>
        <NavLink to="/">Home</NavLink>
      </button>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <button>
        <NavLink to="/contact">Contact</NavLink>
      </button>
    </div>
  );
};

export default AllPage;
