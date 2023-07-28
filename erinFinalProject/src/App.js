import './App.css';
import {Routes, Route, NavLink, Link} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navigation from "./Components/Navigation";
import Home from './Components/Home';
import WaysToHelp from './Components/WaysToHelp';
import ConservationGroups from './Components/ConservationGroups';
import FieldGuide from './Components/FieldGuide';

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
      </Routes>
      </Container>
    </div>
    </>
  );
}

export default App;
