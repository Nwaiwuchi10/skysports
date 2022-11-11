import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TeamPlayerDisplay = ({ players }) => {
  const [filtered, setFiltered] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  return (
    <div
      style={{
        marginLeft: "30px",
        marginRight: "30px",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
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
        {players
          ?.filter((value) => {
            if (filtered === "Team Player") {
              return value;
            } else if (value.playerCategory === "Team Player") {
              return value;
            }
          })
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value?.surName.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((usy, index) => (
            <div>
              <div>
                {searchTitle ? (
                  <div className="ch-ply">
                    <div key={usy._id}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                          <Image
                            src={usy?.passport}
                            fluid
                            thumbnail
                            style={{
                              width: "60px",
                              height: "60px",
                              maxHeight: "60px",
                              objectFit: "cover",
                              marginBottom: "20px",
                            }}
                          />
                        </div>
                        <div>
                          <div>
                            {" "}
                            <h6>
                              {" "}
                              <Link
                                to={`/teamplayerProfile/${usy?._id}`}
                                style={{
                                  textDecoration: "none",
                                  marginLeft: "10px",
                                  color: "black",
                                }}
                              >
                                {usy?.surName} {usy?.firstName}
                              </Link>
                            </h6>
                          </div>
                          <div>
                            <h6
                              style={{
                                textDecoration: "none",
                                marginLeft: "10px",
                                color: "black",
                              }}
                            >
                              {usy?.playerDraftTeams}{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <Image
                      src={usy?.passport}
                      fluid
                      thumbnail
                      style={{
                        width: "60px",
                        height: "60px",
                        maxHeight: "60px",
                        objectFit: "cover",
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <div>
                      {" "}
                      <h6>
                        {" "}
                        <Link
                          to={`/teamplayerProfile/${usy?._id}`}
                          style={{
                            textDecoration: "none",
                            marginLeft: "10px",
                            color: "black",
                          }}
                        >
                          {usy?.surName} {usy?.firstName}
                        </Link>
                      </h6>
                    </div>
                    <div>
                      <h6
                        style={{
                          textDecoration: "none",
                          marginLeft: "10px",
                          color: "black",
                        }}
                      >
                        {usy?.playerDraftTeams}{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
          ))}
      </Row>
    </div>
  );
};

export default TeamPlayerDisplay;
