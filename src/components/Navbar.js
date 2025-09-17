
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Sign Connect</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/translate">Translate</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
