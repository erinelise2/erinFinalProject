import {NavLink, Link} from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Let's Explore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/fieldguide">Field Guide</Nav.Link> 
            <Nav.Link as={NavLink} to="/waystohelp">Ways To Help</Nav.Link>
            <Nav.Link as={NavLink} to="/conservationgroups">Conservation Groups</Nav.Link> 
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
