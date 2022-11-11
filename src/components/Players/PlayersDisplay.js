import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PlayersDisplay = ({ users }) => {
  const [filtered, setFiltered] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  return (
    <div style={{ marginLeft: "30px", marginRight: "30px" }}>
      <h4 className="text-left mb-4">Players List</h4>
      <input
        className="dsp-input"
        type="text"
        placeholder="Search Player By Name"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <Row
        className="row-mp"
        style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
      >
        {users
          ?.filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.surName.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .filter((value) => {
            if (filtered === "Poll Player") {
              return value;
            } else if (value.playerCategory === "Poll Player") {
              return value;
            }
          })
          .map((usy, index) => (
            <>
              <div>
                {searchTitle ? (
                  <div className="ch-ply">
                    <div key={usy._id}>
                      <div className="dsp-ply">
                        <Image
                          src={usy.passport}
                          fluid
                          thumbnail
                          className="img-dsp"
                        />
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
                    </div>
                  </div>
                ) : null}
              </div>
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <div className="dsp-ply">
                  <Image
                    src={usy.passport}
                    fluid
                    thumbnail
                    className="img-dsp"
                  />
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
            </>
          ))}
      </Row>
    </div>
  );
};

export default PlayersDisplay;
