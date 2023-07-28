import React from 'react';
import {Link} from 'react-router-dom'

export default function FieldGuide() {
  return (
    <>
    <div>
        <p>This will be the observations component</p>
        <Link to="/" className="border m-2 p-2 rounded nav-btn">Home</Link>
        <Link to="/waystohelp" className="border m-2 p-2 rounded nav-btn">Ways To Help</Link>
        <Link to="/conservationgroups" className="border m-2 p-2 rounded nav-btn">Conservation Groups</Link> 
    </div>
  </>
  )
}