import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../League/League.css";

const TeamsDisplay = ({ poster }) => {
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
        {poster?.map((posty) => (
          <Col key={posty._id} sm={12} md={6} lg={4} xl={3}>
            <Container>
              <div className="team-container">
                <img
                  src={posty?.image}
                  alt="kjf"
                  style={{
                    width: "auto",
                    height: "10vh",
                    marginBottom: "10px",
                  }}
                />

                <p style={{ marginTop: "10px" }}>
                  <h5>{posty?.teamName}</h5>
                </p>
                <p>
                  <h5>{posty?.teamShorthand}</h5>
                </p>
                <p>
                  <h5>{posty?.tournament}</h5>
                </p>
                <p>
                  <h5>{posty?.league}</h5>
                </p>
              </div>
            </Container>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TeamsDisplay;
