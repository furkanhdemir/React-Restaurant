import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <div className="footerColumn">
          <h4>Social Media</h4>
          <div>
            <p>Facebook</p>
          </div>
          <div>
            <p>Instagram</p>
          </div>
          <div>
            <p>Telegram</p>
          </div>
          <div>
            <p>LinkedIn</p>
          </div>
        </div>
        <div className="footerColumn">
          <h4>About</h4>
          <div>
            <p>Contact us</p>
          </div>
          <div>
            <p>Careers</p>
          </div>
        </div>
        <div className="footerColumn">
          <h4>Location</h4>
          <div>
            <p>Istanbul</p>
          </div>
          <div>
            <p>Turkiye</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
