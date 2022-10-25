import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./More.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import Message from "../Message";
import Loader from "../Loader";
const Analysis = ({ spain }) => {
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(255, 255, 255)",
        height: "auto",
      }}
    >
      {/* <Carousel> */}
      <div className="display-div-more">
        {/* <Row sm={12} md={6} lg={4} xl={3}> */}
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={spain?.image}
            alt="hdt"
            className="card-img-top"
            style={
              {
                // width: "auto",
                // height: "25vh",
                // objectFit: "cover",
              }
            }
          />

          <div
            className="card-body"
            style={{
              width: "auto",
              height: "25vh",
              // objectFit: "cover",
            }}
          >
            <p className="card-text">
              <h6>
                <strong>{spain?.caption}</strong>{" "}
              </h6>{" "}
            </p>
            <p className="card-text">{spain?.desc}</p>
            <p>
              <h6
                style={{
                  color: "blue",
                  fontFamily: "Poppins",
                }}
              >
                Read More...
              </h6>
            </p>
          </div>
        </div>

        {/* ///// */}
      </div>
      {/* </Carousel> */}
    </div>
  );
};

export default Analysis;
