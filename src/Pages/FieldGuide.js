import React from 'react';
import {useEffect, useState} from 'react';
import { Button } from "reactstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import lizard from "../Images/fencelizard.jpeg";
import monarch from "../Images/monarch.jpeg";
import blackbear from "../Images/blackbear.jpeg";
import EditBtnModal from '../Components/EditBtnModal';

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
    <div className="form-container fieldguide-app">
      <h1 className="fieldguide-header">Your Field Notes</h1>
      <Container>
        <Row>
          <Col>
            <Image src={monarch} className="img-fluid m-1" rounded alt="image of monarch on milkweed"></Image>
          </Col>
          <Col>
            <Image src={lizard} className="img-fluid m-1" rounded alt="image of fence lizard on white fence"></Image>
          </Col>
          <Col>
            <Image src={blackbear} className="img-fluid m-1" rounded alt="image of black bear in forest"></Image>
          </Col>
        </Row>
      </Container>
      <p className="fieldguide-text fs-4 fw-bold">This Field Guide keeps track of all of the animals you have seen.</p>
      <p className="fieldguide-instructions fw-bold text-center"> You can edit or delete your observations using the buttons on the table.</p>
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
              <td><Button className="fieldguide-btn btn border-secondary mb-2 border-white" onClick={() => EditBtnModal() }>✐</Button></td>
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
