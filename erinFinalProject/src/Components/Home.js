import React from 'react';
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1 className="home-header">Let's Explore Wildlife and Wild Places!</h1><br></br>
        <h4 className="home-text">This Field Guide will allow you to document your observations of animals, insects, spiders, and plants as you explore the world. Remember to always take care when observing wildlife. Maintain a safe and respectful distance, and remember to look with your eyes and not your hands. We want to help keep nature wild by not disturbing the amazing creatures that cross our paths. </h4><br></br>
        <Link to="/waystohelp" className="border m-2 p-2 rounded justify-content-center nav-btn">Ways To Help</Link>
        <Link to="/conservationgroups" className="border m-2 p-2 rounded justify-content-center nav-btn">Conservation Groups</Link>
        <Link to="/fieldguide" className="border m-2 p-2 rounded justify-content-center nav-btn">Field Guide</Link> 
    </div>
  )
}
