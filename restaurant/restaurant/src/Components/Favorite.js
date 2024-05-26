import React from "react";
import "./Favorite.css";
import favorite from "../images/favourite.jpg";
import { Slide } from "react-reveal";

const Favorite = () => {
  return (
    <div className="favContainer">
      <h2>Our Favorite</h2>
      <div className="favContent">
        <Slide left>
          <img src={favorite} className="favImage" alt="cake" />
        </Slide>
        <Slide right>
          <div className="textContent">
            <p>
              Strawberries and cream and spice with a zip of balsamic. This cake
              celebrates all the classic strawberry combinations, a little like
              a greatest hits album, but way more delicious!
            </p>
          </div>
        </Slide>
      </div>
      <button className="favBtn">Order Now</button>
    </div>
  );
};

export default Favorite;
