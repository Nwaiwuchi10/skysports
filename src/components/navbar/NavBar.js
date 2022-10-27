import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import Image from "react-bootstrap/Image";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useEffect } from "react";
import nafass from "../../assets/images/nafass.png";
function BasicExample() {
  const navigate = useNavigate();
  // const userId = localStorage.getItem("userId");
  // useEffect(() => {
  //   if (userId) {
  //     navigate("/");
  //   }else {
  //     navigate("/");
  //   }
  // }, [navigate, userId]);
  const username = localStorage.getItem("username");
  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("name", "");
    localStorage.setItem("userId", "");
    localStorage.setItem("isAdmin", "");
    localStorage.setItem("email", "");
    localStorage.setItem("userId", "");
    localStorage.setItem("username", "");

    navigate("/");
  };
  return (
    <div className="navbar-div">
      <Navbar className="main-div-navbar" expand="lg">
        <Container className="div-nav-mg">
          <Navbar.Brand href="#home">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={nafass} alt="jed" className="nav-img-logo" />{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              color: "whitesmoke",
              background: "whitesmoke",
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav" className="toggle-div">
            <Nav className="me-auto">
              <Nav.Link
                style={{
                  color: "whitesmoke",
                }}
                className="n-linkz"
              >
                <Link
                  to="/news"
                  style={{
                    color: "whitesmoke",
                    textDecoration: "none",
                  }}
                  className="n-linkz"
                >
                  News
                </Link>
              </Nav.Link>

              <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                {" "}
                <Link
                  to="/livegames"
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  Games
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                Videos
              </Nav.Link>
              <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                <Link
                  to="/teams"
                  style={{ color: "whitesmoke", textDecoration: "none" }}
                >
                  {" "}
                  Teams
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                <Link
                  to="/players"
                  style={{ color: "whitesmoke", textDecoration: "none" }}
                >
                  Players
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                Stats
              </Nav.Link>
              <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                Standings
              </Nav.Link>
            </Nav>
            <div className="float-div">
              <Nav className="me-auto" style={{ color: "whitesmoke" }}>
                <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                  <Link
                    to="/leagues"
                    style={{ color: "whitesmoke", textDecoration: "none" }}
                  >
                    Leagues
                  </Link>
                </Nav.Link>
                <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                  <Link
                    to="/livegames"
                    style={{ textDecoration: "none", color: "whitesmoke" }}
                  >
                    Scores
                  </Link>
                </Nav.Link>
                <Nav.Link style={{ color: "whitesmoke" }} className="n-linkz">
                  <Link
                    to="/nafaRules"
                    style={{ color: "whitesmoke", textDecoration: "none" }}
                  >
                    Rules
                  </Link>
                </Nav.Link>

                {localStorage.getItem("isAdmin") ===
                "true" ? null : username ? (
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      <div> {localStorage.getItem("username")}</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={logout}>Log OUt</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "whitesmoke",
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center",
                      textAlign: "cenetr",
                    }}
                  >
                    <Nav.Link
                      style={{
                        textDecoration: "none",
                        color: "whitesmoke",
                        display: "flex",
                        justifyContent: "center",
                        alignItem: "center",
                        textAlign: "cenetr",
                      }}
                      className="n-linkz"
                    >
                      Sign In
                    </Nav.Link>
                  </Link>
                )}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
