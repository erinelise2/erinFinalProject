import React from 'react';
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <p>This will be the home component</p>
        <Link to="/about" className="border m-2 p-2 rounded nav-btn">More to Explore</Link>
        <Link to="/conservationgroups" className="border m-2 p-2 rounded nav-btn">Conservation Groups</Link>
        <Link to="/observations" className="border m-2 p-2 rounded nav-btn">Field Guide</Link> 
    </div>
  )
}
