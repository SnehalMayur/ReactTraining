import React from "react";

const Navigationbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container container">
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 className="logo">The Techie Blog</h1>
        </div>
    </nav>
    </div>
  );
};

export default Navigationbar;