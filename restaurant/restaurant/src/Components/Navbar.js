import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { BsCake } from "react-icons/bs";

const Navbar = ({ toggle }) => {
  const [move, setMove] = useState(false);

  const moveNavbar = () => {
    if (window.scrollY >= window.innerHeight) {
      setMove(true);
    } else {
      setMove(false);
    }
  };
  window.addEventListener("scroll", moveNavbar);

  return (
    <nav className={`navbar ${move ? "move" : ""}`}>
      <Link className="navlink" to="/">
        <BsCake icon="fa-regular fa-pizza-slice" />
        <div className="desktop">Restaurant</div>
      </Link>
      <div className="navicon" onClick={toggle}>
        <FaBars className="icon"></FaBars>
      </div>
    </nav>
  );
};

export default Navbar;
