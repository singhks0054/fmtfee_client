import React, { useContext } from 'react';
import axios from 'axios'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AuthContext from '../store/AuthContext';

export default function Navigation() {
  const authCtx = useContext(AuthContext);
  const logoutHandler = async () => {
    try {
      await axios.post('https://fmtfee.herokuapp.com/user/logout', {}, {
        headers: {
          'Authorization': `Bearer ${authCtx.token}`
        }
      })
      authCtx.logout()
      // window.location()
    } catch (error) {
      console.log(error);
    }
  }

  return <Navbar bg="primary" variant="dark" text="light" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand >FMT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/" >
            <Nav.Link >Home</Nav.Link>
          </LinkContainer>
          {authCtx.isLogIn && <LinkContainer to="/fee" >
            <Nav.Link >Fee Submit</Nav.Link>
          </LinkContainer>}
          {authCtx.isLogIn && <LinkContainer to="/feestatus" >
            <Nav.Link >Fee Status</Nav.Link>
          </LinkContainer>}
          {authCtx.isLogIn && <LinkContainer to="/student" >
            <Nav.Link >Add Student</Nav.Link>
          </LinkContainer>}
          {authCtx.isLogIn && <LinkContainer to="/record" >
            <Nav.Link >Record</Nav.Link>
          </LinkContainer>}
          {authCtx.isLogIn && <LinkContainer to={'/'}>
            <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
          </LinkContainer>}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
}
