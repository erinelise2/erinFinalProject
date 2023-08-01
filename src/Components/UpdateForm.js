import React from 'react';
import { Button, Form, Input, Label } from "reactstrap";
import {Modal} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


// I think I will need to import useEffect and useState as well as adding const for api, getObservations function and useEffect... or I can make this a router page, but not on the NavBar... then it links to a page, updates and the button takes you back to the fieldguide. I also want to have the form on the homepage to take you to the fieldguide page when you hit submit

export default function UpdateForm () {
    const API_URL = 
    "https://64ad6821b470006a5ec5e9e5.mockapi.io/fieldguide/observation"
    const [observations, setObservations] = useState([])

    const [selectedObservationId, setSelectedObservationId] = useState('');
    const [selectedObservationData, setSelectedObservationData] = useState({});

    const [updatedObservation, setUpdatedObservation] = useState('')
    const [updatedClassification, setUpdatedClassification] = useState('')
    const [updatedLocation, setUpdatedLocation] = useState('')
    const [updatedLocationType, setUpdatedLocationType] = useState('')
    const [updatedDate, setUpdatedDate] = useState(new Date())
    const [updatedTimeOfDay, setUpdatedTimeOfDay] = useState('')

    const dateWithoutTime = new Date();
    dateWithoutTime.setHours(0, 0, 0, 0);
    console.log(dateWithoutTime);

    const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    getObservations();
  }, []);

  function getObservations() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setObservations(data)
        console.log(data)
      })

  }

        function updateObservation(e, observationId) {
            e.preventDefault();
          
            const observationObjectToUpdate = observations.find(observation => observation.id === observationId);
          
            if (!observationObjectToUpdate) {
              console.error(`Observation with ID ${observationId} not found.`);
              return;
            }
            let updatedObservationObject = {
              ...observationObjectToUpdate,
              observation: updatedObservation,
              classification: updatedClassification,
              location: updatedLocation,
              locationtype: updatedLocationType,
              date: updatedDate,
              timeofday: updatedTimeOfDay,
            }
        
            fetch(`${API_URL}/${observationId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedObservationObject),
            }).then(() => {
                getObservations();
                clearForm();
                setShowAlert(true);
            })
            .catch((error) => {
              console.log(error)
            }
          )
          }

          // Edit clear form and enter in below
          function clearForm() {
            setUpdatedObservation('');
            setUpdatedClassification('');
            setUpdatedLocation('');
            setUpdatedLocationType('');
            setUpdatedTimeOfDay('');
            setUpdatedDate(new Date());
          }

    return (
        <>
        <div className="text-center">
            <Form className="border border-3 border-white p-2 update-form">
                <h3 className='header m-2 p-2 fs-1 border-bottom border-3 border-white fw-bold'><span>Update Field Guide Observation ✐</span></h3>
            {/* A dropdown to edit entry */}
                <Label className="fs-4 fw-bold mt-2 mb-2" for="observationSelect">
                </Label>
                <select
                    className="fs-4 bg-light"
                    id="observationSelect"
                    value={selectedObservationId}
                    onChange={e => {
                        setSelectedObservationId(e.target.value);
                        const selectedObservation = observations.find(observation => observation.id === e.target.value);
                        if (selectedObservation) {
                            setSelectedObservationData(selectedObservation); 
                            setUpdatedObservation(selectedObservation.observation || '');
                            setUpdatedClassification(selectedObservation.classification || '');
                            setUpdatedLocation(selectedObservation.location || '');
                            setUpdatedLocationType(selectedObservation.locationtype || '');
                            setUpdatedDate(selectedObservation.date || new Date());
                            setUpdatedTimeOfDay(selectedObservation.timeofday || '');
                        }
                      }}
                    >      
                    <option value=""> ✐ Select Observation Here</option>
                    {observations.map(observation => (
                        <option key={observation.id} value={observation.id}>
                        {observation.observation}
                    </option>
                    ))}
                </select><br></br>
                {selectedObservationData && (
                    <>
                    <Label className="fs-4 fw-bold mt-2 mb-2" for="updatedObservation">Edit Type of Animal</Label>
                    <Input 
                    type="text" c
                    lassName="fs-6" 
                    id="updatedObservation" 
                    value={updatedObservation} 
                    placeholder="Name of Animal or Insect" 
                    onChange={(e) => setUpdatedObservation(e.target.value)} 
                    required></Input> 
                    <Label className="fs-4 fw-bold mt-2 mb-2">Edit Animal Classification</Label>
                    <Input 
                        type="text" 
                        className="fs-6" 
                        id="updatedClassification" 
                        value={updatedClassification} 
                        placeholder="Ex: Mammal, Reptile, Bird, Insect"  
                        onChange={(e) => setUpdatedClassification(e.target.value)} 
                        required></Input>
                    <Label className="fs-4 fw-bold mt-2 mb-2">Edit Observation Location</Label>
                    <Input 
                        type="text" 
                        className="fs-6" 
                        id="updatedLocation" 
                        value={updatedLocation} 
                        placeholder="City, State"
                        onChange={(e) => setUpdatedLocation(e.target.value)}
                        required ></Input>
                    <Label className="fs-4 fw-bold mt-2 mb-2">Edit Type of Location</Label>
                    <Input 
                        type="text" 
                        className="fs-6" 
                        id="updatedLocationType" 
                        value={updatedLocationType} 
                        placeholder="Ex: Field, Mountain, Sky, Ocean" 
                        onChange={(e) => setUpdatedLocationType(e.target.value)}
                        required ></Input>
                    <Label className="fs-4 fw-bold mt-2 mb-2">Edit Observation Date</Label>
                    <Input 
                        type="date" 
                        className="fs-6" 
                        id="updatedDate" 
                        value={updatedDate}
                        onChange={(e) => setUpdatedDate(e.target.value)}
                        required></Input>
                    <Label className="fs-4 fw-bold mt-2 mb-2">Edit Time Of Day</Label>
                    <Input 
                        type="text" 
                        className="fs-6" 
                        id="updatedTimeOfDay" 
                        value={updatedTimeOfDay} 
                        placeholder="Ex: Morning, Afternoon, Evening, Night" 
                        onChange={(e) => setUpdatedTimeOfDay(e.target.value)} 
                        required></Input>
                    </>
                )}
                <Button className="ob-btn btn mt-4 mb-2 fs-5 border-white"  id="updateObservation" color="light" type="submit"   
                onClick={e => {
                    updateObservation(e, selectedObservationId);
                }}
                disabled={!selectedObservationId}
                >Update Observation ✐</Button>
                <Button className="mt-4 mb-2 ms-2 fs-5 border-white" color="light" type="submit"><Link className="text-dark link-btn" to="/fieldguide">Return To Field Guide</Link></Button>
                <div className="text-center mt-4 mb-4 fs-5">
                    <Link className="link text-white border border-2 p-2 rounded" to="/definitions">Click Here Form Entry Help and Definitions</Link>
                 </div>
            </Form>
        </div>
        <Modal show={showAlert} onHide={() => setShowAlert(false)}>
        <Modal.Header className="bg-success text-white" closeButton>
            <Modal.Title className="fw-bold">Entry Updated</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-header">
            {`Hooray! Your "${selectedObservationData.observation}" entry has been updated.`}
        </Modal.Body>
        <Modal.Footer>
            <Button className="mb-2 ms-2 fs-5 border-white" color="success" ><Link className="text-white link-btn" to="/fieldguide">Return To Field Guide</Link></Button>
            <Button className="mb-2 ms-2 fs-5 border-secondary" color="success" onClick={() => setShowAlert(false)}>
            Close
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
}
