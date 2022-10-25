import React from "react";

import { Col, Row } from "react-bootstrap";
import "./More.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Latino = ({ poster }) => {
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(255, 255, 255)",
        height: "auto",
      }}
    >
      {/* <Carousel> */}
      <Row className="row-mp">
        {poster?.map((posty, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={posty?.image}
                className="card-img-top"
                alt="bsm"
                style={{
                  width: "100%",
                  height: "25vh",
                  objectFit: "cover",
                }}
              />
              <div
                className="card-body"
                style={{
                  width: "auto",
                  height: "25vh",
                  objectFit: "cover",
                }}
              >
                <p className="card-text">
                  <h6>
                    <strong> {posty?.caption} </strong>{" "}
                  </h6>
                </p>
                <p className="card-text">{posty?.desc}</p>
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
          </Col>
        ))}
      </Row>
      {/* <div className="display-div-more">
       
        <div className="card" style={{ width: "18rem" }}>
          <img src={posty?.image} className="card-img-top" alt="bsm" />
          <div className="card-body">
            <p className="card-text">{posty?.caption}</p>
            <p className="card-text">{posty?.desc}</p>
          </div>
        </div>
       
      </div> */}
    </div>
  );
};

export default Latino;
