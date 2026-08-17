import React, { useState } from "react";
import "./Navbar.css";
import { CloseIcon, MenuIcon } from "../../../assets/icons";

const links = ["Home", "Tours", "Destination", "About", "Blogs", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <div className="navbar-wrapper">
      <div className="container navbar-inner">
        <a className="logo" href="#home">
          <span>CMS</span> Travelers
        </a>

        <nav className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={index === 0 ? "active" : ""}
              onClick={handleCloseMenu}
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="navbar-actions">
          <a className="login-link" href="#login">
            Login
          </a>
          <a className="signup-btn" href="#signup">
            Signup
          </a>
        </div>
        <button className="menu-toggle-btn" onClick={handleToggleMenu}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
