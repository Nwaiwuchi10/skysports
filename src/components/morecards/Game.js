import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./Game.css";
const Game = ({ poster }) => {
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(255, 255, 255)",
        height: "auto",
      }}
    >
      <Row
        className="row-mp"
        style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
      >
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
                  // objectFit: "cover",
                }}
              >
                <p className="card-text">
                  <h6>
                    {" "}
                    <strong>{posty?.caption}</strong>
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
                    <Link
                      to={`/newsDetails/${posty?._id}`}
                      style={{
                        textDecoration: "none",
                        color: "blue",
                        fontFamily: "Poppins",
                      }}
                    >
                      {" "}
                      Read More...
                    </Link>
                  </h6>
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* <div>
      
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

export default Game;
