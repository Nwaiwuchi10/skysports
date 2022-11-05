import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PlayersDisplay = ({ users }) => {
  return (
    <div style={{ marginLeft: "30px", marginRight: "30px" }}>
      <h4 className="text-left mb-4 ml-8" style={{ marginLeft: "10px" }}>
        PlayersDisplay
      </h4>
      <Row
        className="row-mp"
        style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
      >
        {users?.map((usy, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <div className="dsp-ply">
              <Image src={usy.passport} fluid thumbnail className="img-dsp" />
              <h6>
                {" "}
                <Link
                  to={`/playerProfile/${usy._id}`}
                  style={{
                    textDecoration: "none",
                    marginLeft: "10px",
                    color: "black",
                  }}
                >
                  {usy.surName} {usy.firstName}
                </Link>
              </h6>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PlayersDisplay;
