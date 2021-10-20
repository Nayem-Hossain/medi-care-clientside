import React from "react";
import "./Header.css";
import logo from "../../Images/website-logo.png";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Header = () => {
  const { user, logOut } = UseAuth();
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/">
            <img
              src={logo}
              width="100%"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>

            <NavLink to="/appointment" className="nav-link">
              Appointments
            </NavLink>

            <NavLink to="/doctors" className="nav-link">
              Doctors
            </NavLink>

            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </Nav>
          <Nav>
            {
              user.email ? (
                <Nav className="d-flex align-items-center">
                  <NavLink to="/login">
                    <button
                      onClick={logOut}
                      className="btn btn-danger rounded-pill text-white fw-bold"
                    >
                      Logout
                    </button>
                  </NavLink>
                  <Navbar.Text className="text-center">
                    <Image style={{width:"40px"}} src={user.photoURL} roundedCircle />
                    <br />
                    <span className="fw-bold">{user.displayName}</span>
                  </Navbar.Text>
                </Nav>
              ) : (
                // <button onClick={logOut}>Logout</button>
                <Nav>
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>

                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </Nav>
              )
              // <NavLink to="/register">Register</NavLink>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
