import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../logo.svg";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const refListContainer = useRef(null);
  const refList = useRef(null);

  const toggleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? refList.current.getBoundingClientRect().height + "px"
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button onClick={toggleShowLinks} className="nav-toggle">
            <FaBars />
          </button>
        </div>

        <div
          ref={refListContainer}
          style={linkStyles}
          className={"links-container"}
        >
          <ul className="links" ref={refList}>
            {links.map(({ id, text, url }) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="social-icons"></div>
      </div>
    </nav>
  );
};

export default Navbar;
