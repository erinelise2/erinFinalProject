import React from 'react';
import {Link} from 'react-router-dom'
import ObservationForm from '../Components/ObservationForm';

// import { Button, Form, Input, Label } from "reactstrap";

export default function Home() {
  return (
    <>
    <div>
        <h1 className="home-header">Let's Explore Wildlife and Wild Places!</h1><br></br>
        <h4 className="home-text">This Field Guide will allow you to document your observations of animals, insects, spiders, and plants as you explore the world. Remember to always take care when observing wildlife. Maintain a safe and respectful distance, and remember to look with your eyes and not your hands. We want to help keep nature wild by not disturbing the amazing creatures that cross our paths. </h4><br></br>
      </div>
      <div>
        <h1 className="home-header">Let's Go Exploring!</h1>
        <h4 className="home-text">Use This Form to Document What You See:</h4>
        <ObservationForm />

{/* button to Observation Form Modal... or Observation Form right here */}

      </div>
      <div>
        <Link to="/fieldguide" className="border m-2 p-2 rounded nav-btn">Field Guide</Link> 
    </div>
    </>
  );
}
