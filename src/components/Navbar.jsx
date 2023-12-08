import React from "react";
import { Link } from "react-router-dom";
// import logo from '../assets/inklogo-removebg-preview.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="others">
        HOME
      </Link>
      <Link to="/about" className="others">
        {" "}
        ABOUT
      </Link>
      <Link to="/model" className="others">
        {" "}
        PLANS
      </Link>
      <Link to="/try-now" className="try-now">
        {" "}
        Try Now ↗
      </Link>
    </div>
  );
};

export default Navbar;
