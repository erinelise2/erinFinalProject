import React from 'react';
import { Button, Form, Input, Label } from "reactstrap";
import {useEffect, useState} from 'react';


export default function ObservationForm () {
    const [newObservation, setNewObservation] = useState('')
    const [newClassification, setNewClassification] = useState('')
    const [newLocation, setNewLocation] = useState('')
    const [newLocationType, setNewLocationType] = useState('')
    const [newDate, setNewDate] = useState('')
    const [newTimeOfDay, setNewTimeOfDay] = useState('')

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

        function postNewObservation(e) {
            e.preventDefault()
            fetch(API_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                observation: newObservation,
                classification: newClassification,
                location: newLocation,
                locationtype: newLocationType,
                date: newDate,
                timeofday: newTimeOfDay,
              }),
            }).then(() => getObservations())
            .catch((error) => {
              console.log(error)
            }
          )
          }
    return (
        <div className="text-center">
            <Form className="border border-3 border-white p-2 observation-form">
            <h3 className='header m-2 p-2 fs-1 border-bottom border-3 border-white'><span>Your Field Guide Entry Form ✐</span></h3>
                <Label className="fs-4 fw-bold mt-2 mb-2"  for="newObservation">Name of Animal or Insect:</Label>
                <Input type="text" className="fs-6" id="newObservation" placeholder="Name of Animal or Insect" onChange={(e) => setNewObservation(e.target.value)} required></Input>
                <Label className="fs-4 fw-bold mt-2 mb-2">Classification: </Label>
                <Input type="text" className="fs-6" id="newClassification" placeholder="Ex: Mammal, Reptile, Bird, Insect" onChange={(e) => setNewClassification(e.target.value)}></Input>
                <Label className="fs-4 fw-bold mt-2 mb-2"  for="newLocation">Observation Location:</Label>
                <Input type="text" className="fs-6" id="newLocation" placeholder="City, State" onChange={(e) => setNewLocation(e.target.value)}  ></Input>
                <Label className="fs-4 fw-bold mt-2 mb-2" >Type of Location: </Label> 
                <Input type="text" className="fs-6" id="newLocationType" placeholder="Ex: Field, Mountain, Sky, Ocean" onChange={(e) => setNewLocationType(e.target.value)}></Input>
                <Label className="fs-4 fw-bold mt-2 mb-2"  for="newDate">Observation Date:</Label>
                <Input className="fs-6" id="newDate" type="Date" required onChange={(e) => setNewDate(e.target.value)}></Input>
                <Label className="fs-4 fw-bold mt-2 mb-2" >Time of Day: </Label> 
                <Input type="text" className="fs-6" id="newTimeOfDay" placeholder="Ex: Morning, Afternoon, Evening, Night" onChange={(e) => setNewTimeOfDay(e.target.value)} required></Input>
                <Button className="ob-btn btn mt-4 mb-2 fs-4 border-white" id="submitObservation" onClick={(e) => postNewObservation(e)}> Add Observation to Your Field Notes</Button>
            </Form>
        </div>
    );
}
