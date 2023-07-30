import React from 'react';
import { Button, Form, Input, Label } from "reactstrap";
import {useEffect, useState} from 'react';


// I think I will need to import useEffect and useState as well as adding const for api, getObservations function and useEffect... or I can make this a router page, but not on the NavBar... then it links to a page, updates and the button takes you back to the fieldguide. I also want to have the form on the homepage to take you to the fieldguide page when you hit submit

export default function UpdateForm () {
    const [updatedObservation, setUpdatedObservation] = useState('')
    const [updatedClassification, setUpdatedClassification] = useState('')
    const [updatedLocation, setUpdatedLocation] = useState('')
    const [updatedLocationType, setUpdatedLocationType] = useState('')
    const [updatedDate, setUpdatedDate] = useState('')
    const [updatedTimeOfDay, setUpdatedTimeOfDay] = useState('')

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

        function updateObservation(e, observationObject) {
            e.preventDefault()
            let updatedObservationObject = {
              ...observationObject,
              observation: updatedObservation,
              classification: updatedClassification,
              location: updatedLocation,
              locationtype: updatedLocationType,
              date: updatedDate,
              timeofday: updatedTimeOfDay,
            }
        
            fetch(`${API_URL}/${observationObject.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedObservationObject),
            }).then(() => getObservations())
            .catch((error) => {
              console.log(error)
            }
          )
          }
    return (
        <div className="text-center">
            <Form className="border border-3 border-white p-2 update-form">
                <h3 className='header m-2 p-2 fs-1 border-bottom border-3 border-white fw-bold'><span>Update Field Guide Observation</span></h3>
                <Label className="fs-4 fw-bold mt-2 mb-2" for="updatedObservation">Edit Type of Animal</Label>
                <Input type="text" className="fs-6" id="updatedObservation" placeholder="Name of Animal or Insect" required onChange={(e) => setUpdatedObservation(e.target.value)}></Input>      
                <Label className="fs-4 fw-bold mt-2 mb-2">Edit Animal Classification</Label>
                <Input type="text" className="fs-6" id="updatedClassification" placeholder="Ex: Mammal, Reptile, Bird, Insect" required onChange={(e) => setUpdatedClassification(e.target.value)}></Input>
                <Label className="fs-4 fw-bold mt-2 mb-2">Edit Observation Location</Label>
                <Input type="text" className="fs-6" id="updatedLocation" placeholder="City, State" required onChange={(e) => setUpdatedLocation(e.target.value)}></Input>
                <Label className="fs-4 fw-bold mt-2 mb-2">Edit Type of Location</Label>
                <Input type="text" className="fs-6" id="updatedLocationType" placeholder="Ex: Field, Mountain, Sky, Ocean" required onChange={(e) => setUpdatedLocationType(e.target.value)}></Input>
                <Label className="fs-4 fw-bold mt-2 mb-2">Edit Observation Date</Label>
                <Input type="date" className="fs-6" id="updatedDate" required onChange={(e) => setUpdatedDate(e.target.value)}></Input>
                <Label className="fs-4 fw-bold mt-2 mb-2">Edit Time Of Day</Label>
                <Input type="text" className="fs-6" id="updatedTimeOfDay" placeholder="Ex: Morning, Afternoon, Evening, Night" required onChange={(e) => setUpdatedTimeOfDay(e.target.value)}></Input>
                <Button className="ob-btn btn mt-3 mb-2 fs-4 border-white"  id="updateObservation" onClick={(e) => updateObservation(e, observations)}>Update Observation ✐</Button>
            </Form>
        </div>
    );
}
