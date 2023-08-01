import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLogoutMutation } from "../slices/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/authSlice";
import "./Navigation.css";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  const DashboardHandler = async () => {
    try {
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold fst-italic brand">
            Internbuddy
          </Navbar.Brand>
        </LinkContainer>
        <LinkContainer to="/certificate">
          <Navbar.Brand className="brand">Certificate</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!userInfo && (
              <>
                <LinkContainer to="/signup" className="fs-5">
                  <Nav.Link className="brand">Signup</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login" className="fs-5">
                  <Nav.Link className="brand">Login</Nav.Link>
                </LinkContainer>
              </>
            )}
            {userInfo && (
              <NavDropdown title={<>{userInfo.name}</>} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Button onClick={DashboardHandler}>Dashboard</Button>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Button variant="danger" onClick={logoutHandler}>
                    Logout
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
