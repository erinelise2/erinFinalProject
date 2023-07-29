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
      <h1 className="fieldguide-header">Your Observations</h1>
      <p className="fieldguide-text">Your Field Guide records all of the animals you have seen. You can edit or delete your observations using the buttons on the table.</p>
      {observations.map((observation, index) => (
        <div className="mapContainer" key={index}>
          <div>
          <table className="fieldguide">
          <thead className="fieldguide-head fs-5 fw-bold border">
            {/* this needs to move above the mapContainer div to append each into a table, but when I do that, the table cells do not reach the same widths and the background is wrong. */}
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
          <tbody className="border-white">
            <tr>
              <td><Button className="fieldguide-btn btn border-secondary mb-2 border-white" onClick="">✐</Button></td>
              <td>{observation.observation}</td>
              <td>{observation.classification}</td>
              <td>{observation.location}</td>
              <td>{observation.locationtype}</td>
              <td>{observation.timeofday}</td>
              <td>{observation.date}</td>
              <td><Button className="fieldguide-btn btn border-secondary mb-2 border-white" onClick={() => deleteObservation(observation.id)}>🗑</Button></td>
            </tr>
          </tbody>
          </table>
          </div>

        </div>
      ))}
    </div>
    <div>
    </div>
    </>
  );
}
