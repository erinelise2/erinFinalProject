import React from 'react';
import {Link} from 'react-router-dom'

export default function Observations() {
  return (
    <div>
        <p>This will be the observations component</p>
        <Link to="/" className="border m-2 p-2 rounded nav-btn">Home</Link>
        <Link to="/about" className="border m-2 p-2 rounded nav-btn">More to Explore</Link>
        <Link to="/conservationgroups" className="border m-2 p-2 rounded nav-btn">Conservation Groups</Link> 
    </div>
  )
}