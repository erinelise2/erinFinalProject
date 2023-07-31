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
import {Link} from 'react-router-dom';

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
    <div className="form-container fieldguide-app border border-white border-3 pt-4 p-2 mt-4">
      <h1 className="fieldguide-header mb-4">Your Field Notes</h1>
      <Container>
        <Row>
          <Col>
            <Image src={monarch} className="img-fluid m-1 border border-white border" rounded alt="image of monarch on milkweed"></Image>
          </Col>
          <Col>
            <Image src={lizard} className="img-fluid m-1 border border-white border" rounded alt="image of fence lizard on white fence"></Image>
          </Col>
          <Col>
            <Image src={blackbear} className="img-fluid m-1border border-white border" rounded alt="image of black bear in forest"></Image>
          </Col>
        </Row>
      </Container>
      <div>
      <p className="fieldguide-text fs-5 fw-bold mt-4">This Field Guide keeps track of all of the animals you have seen.</p>
      <div class="mapContainer row">
        <table className="fieldguide border border-white border-3 table table-bordered table-striped table-responsive table-hover table-success">
          <thead className="fieldguide-head fs-5 fw-bold border border-white">
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
              {observations.map((observation, index) => (
                <tr key={index}>
                  <td><Button className="fieldguide-btn btn border-secondary mb-2 mt-2 border-white text-white fw-bolder" color="outline" type="submit"><Link className="text-dark link-btn" to="/hidden">✐</Link></Button></td>
              {/* would I put the modal inside of this return and have two returns? deleting the editbtbmodal component? */}
                  <td>{observation.observation}</td>
                  <td>{observation.classification}</td>
                  <td>{observation.location}</td>
                  <td>{observation.locationtype}</td>
                  <td>{observation.timeofday}</td>
                  <td>{observation.date}</td>
                  <td><Button className="fieldguide-btn btn border-secondary mb-2 mt-2 border-white" color="outline" type="submit" onClick={() => deleteObservation(observation.id)}>🗑</Button></td>
            </tr>
              ))}
          </tbody>
          </table>
        </div>
    </div>
    <div>
    <hr className="me-3 ms-3 border border-white"></hr>
    <p className="fw-bold text-center text-white"> You can edit or delete your observations using the buttons on the table.</p>
    </div>
    <div className="text-center m-4">
        <Link className="link text-white border border-2 p-2 rounded" to="/">Return Home To Add A New Entry</Link>
    </div>
    </div>
    </>
  );
}
