import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import Image from "react-bootstrap/Image";

function BasicExample() {
  return (
    <div className="navbar-div">
      <Navbar className="main-div-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="https://cdn.cdnlogo.com/logos/s/80/sky-sports-news.svg"
              alt="jed"
              style={{ width: "auto", height: "4vh", color: "whitesmoke" }}
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="toggle-div">
            <Nav className="me-auto">
              <Nav.Link href="#home" style={{ color: "whitesmoke" }}>
                News
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "whitesmoke" }}>
                Scores
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "whitesmoke" }}>
                Schedule
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "whitesmoke" }}>
                Videos
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "whitesmoke" }}>
                Teams
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "whitesmoke" }}>
                Players
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "whitesmoke" }}>
                Stats
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "whitesmoke" }}>
                Standings
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "whitesmoke" }}>
                NFL Votes
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "whitesmoke" }}>
                ...
              </Nav.Link>
            </Nav>
            <div className="float-div">
              <Nav className="me-auto" style={{ color: "whitesmoke" }}>
                <Nav.Link href="#home" style={{ color: "whitesmoke" }}>
                  Games Pass
                </Nav.Link>
                <Nav.Link href="#link" style={{ color: "whitesmoke" }}>
                  Watch Games
                </Nav.Link>
                <Nav.Link href="#link" style={{ color: "whitesmoke" }}>
                  Fantasy
                </Nav.Link>
                <Nav.Link href="#link" style={{ color: "whitesmoke" }}>
                  Sign In
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
