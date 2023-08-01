import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import conservation from "../Images/conservation.png";

export default function ConservationGroups() {
  return (
    <>
    <div className="conservation-container fieldguide-app border border-white border-3 pt-4 p-2 mt-4">
      <h1 className="conservation-header mb-3">Conservation Groups</h1>
      <Row>
          <Col> 
            <Image src={conservation} className="mb-4 cons-img img-fluid" alt="Unless Quote inside a drawing of the world with handdrawn animal around the world"></Image>
          </Col>
      </Row>
      <h4 className="conservation-text m-2 pb-2">Click on the links below to learn more about some of the amazing organizations working to protect our wildlife all around our world!</h4>
      <ul className="conservation-list mt-2 m-4 pe-4 ps-4">
        <li><a href="https://www.nature.org/en-us/" className="con-link">The Nature Conservancy</a></li>
        <li><a href="https://gorillafund.org/" className="con-link">Dian Fossey Gorilla Fund</a></li>
        <li><a href="https://turtlesurvival.org" className="con-link">Turtle Survival Alliance</a></li>
        <li><a href="https://en.fundesgua.org" className="con-link">Foundation for the Conservation of Endangered Species of Guatemala</a></li>
        <li><a href="https://marinemammalcare.org/?gclid=CjwKCAjwzo2mBhAUEiwAf7wjkkDgrewX2BmRYcBGQYyaP8M7QWgYdBzEiwGvaQMLZFZhUlz3Uc7eSxoCeFMQAvD_BwE" className="con-link">Marine Mammal Care Center Los Angeles</a></li>
        <li><a href="http://cheetah.org" className="con-link">Cheetah Conservation Fund</a></li>
        <li><a href="https://www.painteddogresearch.org/" className="con-link">Painted Dog Research Trust</a></li>
        <li><a href="http://giraffeconservation.org" className="con-link">Giraffe Conservation Foundation</a></li>
        <li><a href="https://wwww.aza.org" className="con-link">Association of Zoos and Aquariums</a></li>
      </ul>    
    </div>
    </>
  )
}