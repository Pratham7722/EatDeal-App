import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">EatDeal</h1>
      <div>
        <Link to="/" className="btn">Home</Link>
        <Link to="/signin" className="btn">Sign In</Link>
        <Link to="/signup" className="btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
