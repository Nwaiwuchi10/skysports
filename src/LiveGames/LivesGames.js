import { Card, Typography } from "@mui/material";

import Modal from "../components/modal/Modal";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import anfl from "../assets/images/anfl.png";
import Swith from "./Swith";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./LivesGames.css";
import { CardActionArea } from "@mui/material";
import BasicExample from "../components/navbar/NavBar";
import Footer from "../components/Footer/Footer";

const LivesGames = () => {
  const [poster, setPoster] = useState([]);
  const [spanish, setSpanish] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [postsPerPage, setPostsPerPage] = useState(4);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/match/"
      );
      // .then((json) => {
      //   const data = json.sort((a, b) => a.league.localeCompare(b.league));
      //   setPoster(data);
      // });
      setPoster(data);
      console.log(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  return (
    <div>
      <BasicExample />
      {/* <Modal /> */}
      <div>
        <div className="font-small-div">
          {/* <Card variant="outlined"> */}
          {/* <div>
              {" "}
              <img
                src={anfl}
                alt="vdg"
                style={{ width: "auto", height: "20vh" }}
              />
            </div> */}
          <div>
            <Card sx={{ maxWidth: 1500 }}>
              <CardActionArea>
                <CardContent style={{ height: "auto" }}>
                  {/* <div>
                      {" "}
                      <img
                        src={anfl}
                        alt="vdg"
                        style={{ width: "auto", height: "20vh" }}
                      />
                    </div> */}
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    style={{
                      marginBottom: "15px",
                      textAlign: "center",
                      fontWeight: "600",
                    }}
                    className="live-hh"
                  >
                    Live Games
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>

                  <Typography>
                    <div className="live-div-display">
                      <div>
                        <ListGroup
                          as="ul"
                          className="lister"
                          style={{ borderRadius: "0px" }}
                        >
                          <ListGroup.Item>NSSFFL</ListGroup.Item>
                          <ListGroup.Item>Nigerian Premier</ListGroup.Item>

                          <ListGroup.Item>ACADEMICA</ListGroup.Item>
                          <ListGroup.Item>FEMALE PROFESSIONAL</ListGroup.Item>
                          <ListGroup.Item>NSSFFL JUNIOR</ListGroup.Item>
                          <ListGroup.Item>LAGOS</ListGroup.Item>
                          <ListGroup.Item>KD LEAGUE</ListGroup.Item>
                          <ListGroup.Item>e.t.c</ListGroup.Item>
                        </ListGroup>
                      </div>
                      <div>
                        <ListGroup
                          className="grouplister2"
                          style={{ borderRadius: "0px" }}
                        >
                          <ListGroup.Item className="listStep">
                            <Swith step1 step2 step3 step4 step5 step6 step7 />
                          </ListGroup.Item>
                          {/* <ListGroup.Item> */}
                          {loading ? (
                            <Loader />
                          ) : error ? (
                            <Message variant="danger">Failed</Message>
                          ) : (
                            <div>
                              {poster?.gameFixtures?.map((spain) => (
                                <div className="data-list">
                                  <ListGroup.Item
                                    style={{
                                      background: "whiteSmoke",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <div>
                                        <h7>
                                          <strong>{spain?.league}</strong>{" "}
                                        </h7>
                                      </div>
                                      <div>
                                        {" "}
                                        <h7>{spain?.date}</h7>
                                      </div>
                                    </div>
                                  </ListGroup.Item>
                                  <ListGroup.Item>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <div>
                                        <span>
                                          {" "}
                                          <h7>{spain?.team1} </h7>
                                        </span>{" "}
                                        <span>
                                          <h7>
                                            <strong>
                                              {" "}
                                              {spain?.scoresTeam1}
                                            </strong>
                                          </h7>{" "}
                                        </span>
                                        <h7>vs</h7>
                                        <span style={{ marginLeft: "5px" }}>
                                          <h7>
                                            <strong>
                                              {spain?.scoresTeam2}
                                            </strong>{" "}
                                          </h7>
                                        </span>
                                        <span>
                                          <h7>{spain?.team2} </h7>
                                        </span>
                                      </div>
                                      <div>
                                        <h7>{spain?.time}</h7>
                                      </div>
                                    </div>
                                  </ListGroup.Item>
                                </div>
                              ))}
                            </div>
                          )}
                          {/* </ListGroup.Item> */}
                        </ListGroup>
                      </div>
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LivesGames;
{
  /* </Card> */
}
// ?.sort((league, date) =>
//   league.id > date.id ? 1 : -1
// )
