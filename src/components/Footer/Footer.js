import React from "react";
import Image from "react-bootstrap/esm/Image";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer-main-div">
      <div className="footer-display">
        <div>
          <Image
            src="https://cdn.cdnlogo.com/logos/s/80/sky-sports-news.svg"
            alt="gh"
            style={{ width: "auto", height: "6vh", color: "whitesmoke" }}
          />{" "}
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
