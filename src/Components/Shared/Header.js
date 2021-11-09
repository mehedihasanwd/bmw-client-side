import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  const { user, logOut } = useFirebase();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/home">
            <span className="text-white">BMW</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="mx-1 justify-content-end">
            <Nav.Link className="text-danger" as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link className="text-danger" as={Link} to="/cars">
              Cars
            </Nav.Link>

            {/* <Nav.Link className="text-danger" as={Link} to="/explore">
              My Orders
            </Nav.Link> */}

            {user?.email ? (
              <Nav.Link className="text-danger" as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            ) : (
              ""
            )}

            {/* {user?.email ? (
              <Nav.Link className="text-danger" as={Link} to="/addservice">
                Add A New Tour
              </Nav.Link>
            ) : (
              ""
            )} */}

            {user?.email ? (
              <button
                onClick={logOut}
                className="btn-danger border-0 me-3 rounded-1"
              >
                Log Out
              </button>
            ) : (
              <Nav.Link className="text-danger" as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Nav.Link className="text-warning" eventKey={2}>
              <span className="me-2 text-white">Signed in as:</span>
              {user?.displayName ? user?.displayName : user?.email}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
