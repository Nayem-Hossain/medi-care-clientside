import React from "react";
import "./Header.css";
import logo from "../../Images/website-logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
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
                <Nav>
                  <NavLink
                    onClick={logOut}
                    to="/login"
                    className="btn btn-danger rounded-pill text-white fw-bold"
                  >
                    Logout
                  </NavLink>
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
            <Navbar.Text>
              Signed in as: <br /> {user.displayName}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
