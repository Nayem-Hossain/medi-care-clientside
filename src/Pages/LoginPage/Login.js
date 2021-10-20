import React from "react";
import logo from "../../Images/logoForLogin.png";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import  UseFirebase from "../../Hooks/UseFirebase";
import { useHistory, useLocation } from "react-router";
import "./Login.css";

const Login = () => {
  UseFirebase();
  const {
    handleGoogleSignIn,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    error,
  } = UseAuth();

  const location = useLocation();
  const redirect_url = location.state?.from || "/home";
  const history = useHistory();

  const eventGoogleSignIn = () => {
    handleGoogleSignIn().then((result) => {
      history.push(redirect_url);
    });
  };
  return (
    <div className="container border-shadow mt-5">
      <div className="row">
        <div className="col-lg-7 long-padding">
          <div className="text-center">
            <h1 className=" text-bold mb-4">Sign in to Your Account</h1>
            <div className="authentication-icon my-3">
              <button onClick={eventGoogleSignIn} className="border-0 bg-white">
                <i className="fab fa-google-plus-g p-3 text-danger"></i>
              </button>
              <button className="border-0 bg-white">
                <i className="fab fa-facebook-square p-3 text-primary"></i>
              </button>
              <button className="border-0 bg-white">
                <i className="fab fa-linkedin p-3 text-info"></i>
              </button>
            </div>
            <p>or use email for login</p>
          </div>

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Email address:</Form.Label>
              <Form.Control
                onBlur={handleEmailChange}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password:</Form.Label>
              <Form.Control
                onBlur={handlePasswordChange}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="remember me?" />
            </Form.Group>

            <p className="text-danger">{error}</p>

            <Button className="btn btn-warning px-5 py-2" type="submit">
              Login
            </Button>
            <p className="text-center pt-3 m-0">
              dont have an account? <Link to="/register">register</Link>
            </p>
          </Form>
        </div>

        <div className="col-lg-5 image d-flex justify-content-center align-items-center">
          <div className="text-center text-dark p-4">
            <img src={logo} className="img-fluid" alt="" />
            <h6>Make Your Medical Experience a Lot Brighter</h6>
            <Form.Text className="text-muted">
              with best facilitise best equipments, you are in safe hands
            </Form.Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
