import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import { IoReorderThree } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import './Navbar.css'

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50); // Change navbar style if scrolled past 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    // Disable scrolling when the menu is open
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden"; // Disable scrolling
      } else {
        document.body.style.overflow = "auto"; // Enable scrolling
      }
    }, [isOpen]);

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: isScroll ? "rgba(0,0,0)" : "",
      }}
    >
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>IT Staffing</li>
        <li>Speech Staffing</li>
        <li>IT Solution Reseller</li>
        <li>
          <button className="find-jobs-button">Find Jobs</button>
        </li>
      </ul>
      <ul className={`nav-links-mobile ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>IT Staffing</li>
        <li>Speech Staffing</li>
        <li>IT Solution Reseller</li>
        <li>
          <button className="find-jobs-button">Find Jobs</button>
        </li>
      </ul>
      <div className="navtoggle" onClick={toggleMenu}>
        {!isOpen ? <IoReorderThree size={30} /> : <IoMdClose size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
