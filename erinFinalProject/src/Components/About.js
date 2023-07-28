import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>More To Explore</h1>
    <Link to="/" className="border m-2 p-2 rounded nav-btn">Home</Link>
    <Link to="/support" className="border m-2 p-2 rounded nav-btn">Conservation Groups</Link>
    <Link to="/observations" className="border m-2 p-2 rounded nav-btn">Field Guide</Link>    
    </div>
  )
}
