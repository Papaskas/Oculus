import React from 'react';
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function Index () {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand><NavLink to="/" style={{ textDecoration: 'none', color: '#dee2e6' }}>Oculus</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/*<Nav.Link href="#home">Home</Nav.Link>*/}
            <NavDropdown title="Games" id="basic-nav-dropdown">
              <NavLink to="/ticTacToe" style={{textDecoration: 'none'}} className="dropdown-item">TicTacToe</NavLink>
            </NavDropdown>
            <NavDropdown title="Tools" id="basic-nav-dropdown">
              {/*<NavDropdown.Divider />*/}
              <NavLink to="/documentation" style={{textDecoration: 'none'}} className="dropdown-item">Documentation</NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Index;
