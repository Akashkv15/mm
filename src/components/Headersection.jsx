import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaPhone,FaPhoneAlt } from 'react-icons/fa';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';  

function Headersection() {
  return (
    <Navbar expand="lg" className="bg-transperant animate__animated animate__fadeInUp"style={{ animationDelay: "0.1s" }}  data-bs-theme="dark" >
      <Container>
        <Navbar.Brand ><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"className='bg-dark' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto navbar-font">
            <Nav.Link href="#home" className=" animate__animated animate__fadeInUp"style={{ animationDelay: "0.1s",color: "#05155dff" }}  >Home</Nav.Link>
            <Nav.Link href="#link" className=" animate__animated animate__fadeInUp"style={{ animationDelay: "0.1s",color: "#05155dff" }}>Events</Nav.Link>
            <Nav.Link href="#link" className=" animate__animated animate__fadeInUp"style={{ animationDelay: "0.1s",color: "#05155dff" }}>About</Nav.Link>
            <Nav.Link href="#link" className=" animate__animated animate__fadeInUp"style={{ animationDelay: "0.1s",color: "#05155dff" }}>Blog</Nav.Link>
            <Nav.Link href="#link" className=" animate__animated animate__fadeInUp"style={{ animationDelay: "0.1s",color: "#05155dff" }}>Contact</Nav.Link>
            <button className="custom-btn d-none d-lg-inline-block animate__animated animate__fadeInUp"style={{ animationDelay: "0.1s",color: "#05155dff" }} ><FaPhoneAlt/> 9845624</button>
             {/* Mobile button */}
            <button
              className="custom-btn d-lg-none animate__animated animate__fadeInUp"
              style={{
                animationDelay: "0.1s",
                color: "#05155dff",
                fontSize: "13px",
                // padding: "6px 10px",
                width: "20%",
                textAlign: "center",
                marginTop: "10px",
                marginLeft:'-25px'
              }}
            >
              <FaPhoneAlt /> 9845624
            </button>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headersection