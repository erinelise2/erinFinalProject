import React from 'react';
import {Link} from 'react-router-dom'

export default function ConservationGroups() {
  return (
    <>
    <div>
      <h1 className="conservation-header">Conservation Groups</h1><br></br>
      <h4 className="conservation-text">Click on the links below to learn more about the conservation work of just some of the amazing organizations working to protect our world!</h4>
      <ul>
        <li>The Nature Conservancy</li>
        {/* https://www.nature.org/en-us/ */}
        <li>Dian Fossey Gorilla Fund</li>
        {/* https://gorillafund.org/ */}
        <li>Turtle Survival Alliance</li>
        {/* https://turtlesurvival.org/ */}
        <li>Foundation for the Conservation of Endangered Species of Guatemala</li>
        {/* https://en.fundesgua.org/ */}
        <li>Marine Mammal Care Center - Los Angeles</li>
        {/* https://marinemammalcare.org/?gclid=CjwKCAjwzo2mBhAUEiwAf7wjkkDgrewX2BmRYcBGQYyaP8M7QWgYdBzEiwGvaQMLZFZhUlz3Uc7eSxoCeFMQAvD_BwE */}
        <li>Cheetah Conservation Fund</li>
        {/* https://cheetah.org/ */}
        <li>Painted Dog Research Trust</li>
        {/* https://www.painteddogresearch.org/ */}
        <li>Giraffe Conservation Foundation</li>
        {/* https://giraffeconservation.org/ */}
        <li>Association of Zoos and Aquariums</li>
        {/* https://www.aza.org/ */}
      </ul>        
      <div>
        <Link to="/" className="border m-2 p-2 rounded nav-btn">Home</Link>
        <Link to="/fieldguide" className="border m-2 p-2 rounded nav-btn">Field Guide</Link> 
        <Link to="/waystohelp" className="border m-2 p-2 rounded nav-btn">Ways To Help</Link>
      </div>
    </div>
    </>
  )
}