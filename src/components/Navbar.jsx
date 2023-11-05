import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../logo.svg";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button
            onClick={() => setShowLinks(!showLinks)}
            className="nav-toggle"
          >
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className="links-container">
            <ul className="links">
              {links.map(({ id, text, url }) => {
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className="social-icons"></div>
      </div>
    </nav>
  );
};

export default Navbar;
