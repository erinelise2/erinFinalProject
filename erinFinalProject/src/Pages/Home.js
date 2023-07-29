import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ObservationForm from '../Components/ObservationForm';
import racoon from "../Images/babyracoon.jpeg";
import coyote from "../Images/coyote.jpeg";
import hawk from "../Images/hawk.jpeg";

// import { Button, Form, Input, Label } from "reactstrap";

export default function Home() {
  return (
    <>
    <div>
        <h1 className="home-header">Let's Explore Wildlife and Wild Places!</h1><br></br>
        <h4 className="home-text">This Field Guide will allow you to document your observations of animals, insects, spiders, and plants as you explore the world. Remember to always take care when observing wildlife. Maintain a safe and respectful distance, and remember to look with your eyes and not your hands. We want to help keep nature wild by not disturbing the amazing creatures that cross our paths. </h4><br></br>
      </div>
      <Container>
        <Row>
          <Col>
            <Image src={racoon} className="img-fluid m-1" rounded alt="image of baby raccoon walking on green grass"></Image>
          </Col>
          <Col>
            <Image src={hawk} className="img-fluid m-1" rounded alt="image of hawk in sky"></Image>
          </Col>
          <Col>
            <Image src={coyote} className="img-fluid m-1" rounded alt="image of coyote in field"></Image>
          </Col>
        </Row>
      </Container>
      <div>
        <h2 className="home-header mt-3 mb-3">Use The Form Below To Record What You See:</h2>
        <ObservationForm />
      </div>
      <div>
    </div>
    </>
  );
}
