import React from 'react';
import {Link} from 'react-router-dom'

export default function ConservationGroups() {
  return (
    <>
    <div>
      <h1 className="conservation-header">Conservation Groups</h1><br></br>
      <h4 className="conservation-text">Click on the links below to learn more about the conservation work of these amazing organizations!</h4>
      <ul>
        <li>The Nature Conservancy</li>
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