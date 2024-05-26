import React from "react";
import { cakes } from "../data/menu";
import "./Cakes.css";
import { Slide } from "react-reveal";

const Cakes = ({ id }) => {
  return (
    <div className="cakeContainer">
      <h1 className="cakeHeading">Most Popular</h1>
      <div className="cakeWrapper">
        {cakes.map((cake, index) => (
          <Slide
            key={index}
            right={index >= 3 ? true : false}
            left={index < 3 ? true : false}
          >
            <div className="cakeCard" key={index}>
              <img src={cake.img} alt={cake.alt} className="cakeImg" />
              <div className="cakeInfo">
                <div className="propTitle">{cake.title}</div>
                <div>{cake.desc}</div>
                <div className="cakePrice">{cake.price}</div>
                <button className="cakeBtn">Select</button>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Cakes;
