import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

function Headersection() {
  const [isOpen, setIsOpen] = useState(false); // Track toggle open/close

  return (
    <Navbar
      expand="lg"
      className="bg-transperant animate__animated animate__fadeInUp"
      style={{ animationDelay: "0.1s", position: "relative" }}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-dark" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{
            position: isOpen ? "absolute" : "static", // Overlay when open
            top: isOpen ? "100%" : "auto",
            left: 0,
            width: "100%",
            // zIndex: 9999,
            background: isOpen ? "white" : "white", // Preserve colors
            padding: isOpen ? "20px " : "0px",
             marginLeft: isOpen ? "0px" : "0px",   // ✅ margin-left only when open
            marginBottom: isOpen ? "0px" : "0px", // ✅ margin-bottom only when open
            zIndex: isOpen ? 100: "auto",  
            border: isOpen? "2px solid blue":"none",
          }}
        >
          <Nav
            className="ms-auto navbar-font"
            style={{
              display: "flex",
              flexDirection: "row", // Row-wise links
              flexWrap: "wrap",
              justifyContent:'center',
              gap: "10px",
            }}
          >
            <Nav.Link
              href="#home"
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.1s", color: "#05155dff" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.1s", color: "#05155dff" }}
            >
              Events
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.1s", color: "#05155dff" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.1s", color: "#05155dff" }}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: "0.1s", color: "#05155dff" }}
            >
              Contact
            </Nav.Link>
            <button className="custom-btn d-none d-lg-inline-block animate__animated animate__fadeInUp"style={{ animationDelay: "0.1s",color: "#05155dff" }} ><FaPhoneAlt/> 9845624</button>
            {/* Call button */}
            <button
              className="custom-btn d-lg-none animate__animated animate__fadeInUp"
              style={{
                animationDelay: "0.1s",
                color: "#05155dff",
                fontSize: "13px",
                width: "20%",
                textAlign: "center",
                marginLeft: "5px",
              }}
            >
              <FaPhoneAlt /> 9845624
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headersection;
