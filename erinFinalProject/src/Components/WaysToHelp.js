import React from 'react'
import {Link} from 'react-router-dom'

export default function WaysToHelp() {
  return (
    <>
    <div>
      <h1 className="ways-header">How You Can Help Protect Wildlife and Wildspaces</h1><br></br>
      <h4 className="ways-list-header">Things to Rememeber When You Are Exploring:</h4><br></br>
        <ul>
          <li>Respect the space - No one appreciates someone barging into their home and touching everything (or themselves).</li>
          <li> Leave it as you found it - When you adventure into a space, make sure to leave no trace of your presence. Clean up after yourself, but also leave everything (like shells, rocks, and flowers) where you found them.</li>
          <li>Keep it clean - Always pick up trash or harmful debri and find the appropriate way to either throw it away or recycle the item.</li>
          <li>Listen - Take time to listen to the world around you, not your headphones or speakers.</li>
          <li>Observe - Sit in the moment and be curious. Look around, what do you see?</li>
          <li> Stay Curious - Record what you see. When you get home, reference your field guide to keep learning more about the animals and plants your observed.</li>
        </ul><br></br>
      <h4 className="ways-list-header">Things You Can Do In Your Daily Life To Help Wildlife:</h4><br></br>
        <ul>
        <li>Use resuable items like bags, silverware, and water bottles</li>
            <li>Volunteer with a local group to pick up trash</li>
            <li>Educate yourself and others on sustainable practices</li>
            <li>Support polinators by planting native flowers, trees, and grasses</li>
            <li>Watch a nature documentary</li>
            <li>Share what you have learned with your friends and family</li>
        </ul><br></br>
    </div>
    <div>
      <Link to="/" className="border m-2 p-2 rounded nav-btn">Home</Link>
      <Link to="/fieldguide" className="border m-2 p-2 rounded nav-btn">Field Guide</Link> 
      <Link to="/conservationgroups" className="border m-2 p-2 rounded nav-btn">Conservation Groups</Link>
    </div>
  </>
  )
}
