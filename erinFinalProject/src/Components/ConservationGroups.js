import React from 'react';
import {Link} from 'react-router-dom'

export default function ConservationGroups() {
  return (
    <div>
      <h1 className="conservation-header">Learn More About How You Can Help Wildlife</h1>
    <div className='btn-group'>
    <Link to="/" className="border m-2 p-2 rounded nav-btn">Home</Link>
    <Link to="/support" className="border m-2 p-2 rounded nav-btn">Conservation Groups</Link>
    <Link to="/observations" className="border m-2 p-2 rounded nav-btn">Field Guide</Link>    
    </div>
    </div>
  )
}