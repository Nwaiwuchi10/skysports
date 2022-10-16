import React from "react";
import Image from "react-bootstrap/esm/Image";
import "./Footer.css";
import nafas from "../../assets/images/nafas.png";

const Footer = () => {
  return (
    <div className="Footer-main-div">
      <div className="footer-display">
        <div>
          <img src={nafas} alt="gh" className="img-footer-img" />{" "}
        </div>
        <div className="content-div">
          {" "}
          © 2022 NFL Enterprises LLC. NFL and the NFL shield design are the
          best. National Football League. NFL footage © NFL Productions LLC.
        </div>
        <div className="foot-policy">
          <div>PRIVACY POLICY</div>
          <div>TERMS OF SERVICES</div>
          <div>SUBSCRIPTION TERMS AND CONDITION</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
