import React from 'react';
import {useEffect, useState} from 'react';
import { Button } from "reactstrap";
import {Link} from 'react-router-dom'

export default function FieldGuide() {
  const API_URL = 
  "https://64ad6821b470006a5ec5e9e5.mockapi.io/fieldguide/observation"
  const [observations, setObservations] = useState([])

  useEffect(() => {
    getObservations()
  }, [])

  function getObservations() {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => {
        setObservations(data)
        console.log(data)
      })
  }

  function deleteObservation (id) {
    fetch(API_URL + `/${id}`, {
      method: 'DELETE',
    }).then(() => getObservations())
  }

  return (   
    <> 
    <div className="form-container App">
      {observations.map((observation, index) => (
        <div className="mapContainer" key={index}>
          <div>
          <table className="fieldguide-table table border">
          <thead>
            <tr>
              <th>Update</th>
              <th>Type of Animal</th>
              <th>Classification</th>
              <th>City, State</th>
              <th>Location Type</th>
              <th>Time of Day</th>
              <th>Date</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Button className="fieldguide-btn btn border-secondary mb-2" onClick="">✐</Button></td>
              <td>{observation.observation}</td>
              <td>{observation.classification}</td>
              <td>{observation.location}</td>
              <td>{observation.locationtype}</td>
              <td>{observation.date}</td>
              <td>{observation.timeofday}</td>
              <td><Button className="fieldguide-btn btn border-secondary mb-2" onClick={() => deleteObservation(observation.id)}>🗑</Button></td>
            </tr>
          </tbody>
          </table>
          </div>

        </div>
      ))}
    </div>
        <div>
        <Link to="/" className="border m-2 p-2 rounded nav-btn">Home</Link>
        <Link to="/waystohelp" className="border m-2 p-2 rounded nav-btn">Ways To Help</Link>
        <Link to="/conservationgroups" className="border m-2 p-2 rounded nav-btn">Conservation Groups</Link> 
    </div>
    </>
  );
}
