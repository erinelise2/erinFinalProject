import './App.css';
import {Routes, Route, NavLink, Link} from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Home from './Components/Home';
import WaysToHelp from './Components/WaysToHelp';
import ConservationGroups from './Components/ConservationGroups';
import FieldGuide from './Components/FieldGuide';

// Navbar templates: https://react-bootstrap.netlify.app/docs/components/navbar/

function App() {
  return (
    <>
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Your Field Guide</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/waystohelp">Ways To Help</Nav.Link>
            <Nav.Link as={NavLink} to="/conservationgroups">Conservation Groups</Nav.Link>
            <Nav.Link as={NavLink} to="/fieldguide">Field Guide</Nav.Link>  
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
      <Routes>
    {/* Below using Route is how you link to the component you want to load */}
        <Route path="/" element={<Home />}></Route>  
        <Route path="/waystohelp" element={<WaysToHelp />}></Route>
        <Route path="/conservationgroups" element={<ConservationGroups />}></Route>  
        <Route path="/fieldguide" element={<FieldGuide />}></Route>
      </Routes>
      </Container>
    </div>
    </>
  );
}

export default App;
