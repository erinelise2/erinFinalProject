import React from 'react';
import {Link} from 'react-router-dom'

export default function FieldGuide() {
  return (
    <>
    <div>
    <h1 className="fieldguide-header">Your Observations</h1><br></br>
      <table className="fieldguide-table table border">
      <thead>
        <tr>
          <th>Update</th>
          <th>Type of Animal</th>
          <th>City, State</th>
          <th>Location Type</th>
          <th>Time of Day</th>
          <th>Date</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><button className="fieldguide-btn btn border-secondary mb-2">✐</button></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><button className="fieldguide-btn btn border-secondary mb-2">🗑</button></td>
        </tr>
      </tbody>
      </table>
    </div>
    <div>
        <Link to="/" className="border m-2 p-2 rounded nav-btn">Home</Link>
        <Link to="/waystohelp" className="border m-2 p-2 rounded nav-btn">Ways To Help</Link>
        <Link to="/conservationgroups" className="border m-2 p-2 rounded nav-btn">Conservation Groups</Link> 
    </div>
  </>
  )
}