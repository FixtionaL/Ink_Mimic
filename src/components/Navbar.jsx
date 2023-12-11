import React from "react";
import { Link } from "react-router-dom";
// import logo from '../assets/inklogo-removebg-preview.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="others">
        Home
      </Link>
      <Link to="/about" className="others">
        {" "}
        About
      </Link>
      <Link to="/model" className="others">
        {" "}
        Plans
      </Link>
      <Link to="/explore" className="others">
        {" "}
        Explore
      </Link>
      <Link to="/try-now" className="try-now">
        {" "}
        Try Mimic.ai ↗
      </Link>
    </div>
  );
};

export default Navbar;
