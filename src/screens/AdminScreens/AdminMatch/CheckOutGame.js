import React, { useState } from "react";
import { Nav } from "react-bootstrap";

import { Link } from "react-router-dom";
import BasicExample from "../../../components/navbar/NavBar";
import AdminPostMatch from "./AdminPostMatc";

import Commentary from "./Commentary";
import LineUp from "./LineUp";
import Statistics from "./Statistics";
import { BsArrow90DegLeft } from "react-icons/bs";
const CheckOutGame = () => {
  const [act, setAct] = useState(true);

  return (
    <div>
      <BasicExample />
      <div
        style={{
          broder: "1px solid grey",
          borderRadius: "8px",
          color: "#171744",
          backgroundColor: "whitesmoke",
          width: "50px",
          height: "50px",
          display: "flex",
          textDecoration: "none",
          textAlign: "center",
          alignItems: "center",
          borderColor: "grey",
          justifyContent: "flex-start",
          marginBottom: "30px",
        }}
      >
        <Link
          to={`/admin/${localStorage.getItem("isAdmin")}`}
          style={{
            display: "flex",
            alignItem: "center",
            fontSize: "20px",
            justifyContent: "center",
            texAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <BsArrow90DegLeft />
        </Link>{" "}
      </div>
      <Nav className="justify-content-center mb-4">
        <Nav.Item onClick={() => setAct(true)}>
          <Nav.Link style={{ color: act ? "blue" : null }}>Line Up</Nav.Link>
        </Nav.Item>

        <Nav.Item onClick={() => setAct(false)}>
          <Nav.Link style={{ color: !act ? "blue" : null }}>Game Info</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{
              textDecoration: "none",
              color: "#0c132ce7",
              fontWeight: "700",
            }}
          >
            Statistics
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{
              textDecoration: "none",
              color: "#0c132ce7",
              fontWeight: "700",
            }}
          >
            Commentary
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {act ? <LineUp /> : <AdminPostMatch />}
    </div>
  );
};

export default CheckOutGame;
