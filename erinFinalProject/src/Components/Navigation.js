import {NavLink, Link} from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
    return (
        <Navbar expand="sm" className="navigation-bar mb-4">
        <Container>
          <Navbar.Brand className="text-white" as={Link} to="/">Let's Explore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link className="nav-link" as={NavLink} to="/fieldguide">Field Guide</Nav.Link> 
            <Nav.Link className="nav-link" as={NavLink} to="/waystohelp">Ways To Help</Nav.Link>
            <Nav.Link className="nav-link" as={NavLink} to="/conservationgroups">Conservation Groups</Nav.Link> 
            <Nav.Link className="nav-link" as={NavLink} to="/contact">Contact Us</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
