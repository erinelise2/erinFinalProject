import './App.css';
import {Routes, Route } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navigation from "./Components/Navigation";
import Home from './Pages/Home';
import WaysToHelp from './Pages/WaysToHelp';
import ConservationGroups from './Pages/ConservationGroups';
import FieldGuide from './Pages/FieldGuide';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

// Navbar templates: https://react-bootstrap.netlify.app/docs/components/navbar/

function App() {
  return (
    <>
    <div className="App">
    <Navigation />
    <Container>
    <Routes>
    {/* Below using Route is how you link to the component you want to load */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/fieldguide" element={<FieldGuide />}></Route>  
        <Route path="/waystohelp" element={<WaysToHelp />}></Route>
        <Route path="/conservationgroups" element={<ConservationGroups />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </Container>
    </div>
    <footer>
      <Footer />
    </footer>
    </>
  );
}

export default App;
