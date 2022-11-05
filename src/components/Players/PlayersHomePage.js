import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import BasicExample from "../navbar/NavBar";
import Partners from "../Partners/Partners";

const PlayersHomePage = () => {
  return (
    <div>
      <BasicExample />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            border: "1px solid grey",
            width: "150px",
            height: "100px",
            textAlign: "center",
            alignItems: "center",
            background: "whitesmoke",
          }}
        >
          <Link
            to="/PollPlayers"
            className="text-decoration-none text-center"
            style={{
              border: "1px solid grey",
              width: "150px",
              height: "100px",
              textAlign: "center",
              alignItems: "center",
              background: "white",
            }}
          >
            Poll Players
          </Link>
        </div>
        <div
          style={{
            border: "1px solid grey",
            width: "150px",
            height: "100px",
            textAlign: "center",
            alignItems: "center",
            background: "whitesmoke",
          }}
        >
          <Link
            to="/TeamPlayers"
            className="text-decoration-none"
            style={{
              border: "1px solid grey",
              width: "150px",
              height: "100px",
              textAlign: "center",
              alignItems: "center",
              background: "white",
            }}
          >
            Team Players
          </Link>
        </div>
      </div>
      <hr />
      <Partners />
      <Footer />
    </div>
  );
};

export default PlayersHomePage;
