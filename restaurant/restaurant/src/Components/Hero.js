import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Hero.css";
import Sidebar from "./Sidebar";

const Hero = ({ id }) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <div className="container" id={id}>
      <Navbar toggle={toggle}></Navbar>
      <Sidebar show={show} toggle={toggle}></Sidebar>
      <div className="content">
        <div className="contentItems">
          <h1 className="navHead">Restaurant</h1>
          <p>
            A local favorite for 83+ years. Featuring our famous DeAngelis
            donuts ice cream and our cakes. Full menu offered all day ant late
            night. Full bar with entertaiment on weekends.
          </p>
          <div className="btn">Order</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
