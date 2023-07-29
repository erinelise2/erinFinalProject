import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import protect from "../Images/protect.png";

export default function WaysToHelp() {
  return (
    <>
    <div className="ways-container">
      <h1 className="ways-header">You Can Help Protect Wildlife and Wildspaces</h1><br></br>
      <h4 className="ways-list-header">Things to Remember When You Are Exploring:</h4><br></br>
      <Container>
        <Row>
          <Col>
            <Image src={protect} className="img-fluid mb-4" rounded alt="large words respect, protect, connect outlined in green with transparent center"></Image>
          </Col>
        </Row>
      </Container>
        <ul>
          <li className="ways-list"><b>Respect</b>  
            <ul>
              <li>
                Look with your eyes, not your hands. Do not touch the wildlife.
              </li>
              <li>
                Maintain a safe distance between you and the wildlife.
              </li>
              <li>
                Remember that you are a visitor. Do not interfere with the lives of the plants and animals you encounter.
              </li>
            </ul>
          </li>
          <li className="ways-list"><b>Protect</b> 
            <ul>
              <li>
                Leave it as you found it. Always clean up after yourself and others, and leave nature where you found it.
              </li>
              <li>
                Use resuable containers such as water bottles, food containers, and shopping bags.
              </li>
              <li>
                If you see someone being disrespectful, stand up for wildlife.
              </li>
            </ul>
          </li>
          <li className="ways-list"><b>Connect</b> 
            <ul>
              <li>
                Spend time observing. Be in the moment. Listen.
              </li>
              <li>
                Record your observations, take photos, sketch what you see.
              </li>
              <li>
                Share your love of wildlife with others.
              </li>
            </ul>
          </li>
        </ul>
        <p className="ways-text"><b>Stay Curious and Have Fun!</b><br></br> Record what you see. When you get home, reference your field guide to keep learning more about the animals and plants your observed!</p>
      <hr className="text-white m-4 border-2"></hr>
      <h4 className="ways-list-header">Things You Can Do In Your Daily Life To Help Wildlife:</h4>
        <ul>
            <li className="ways-list">Use resuable items like bags, silverware, and water bottles</li>
            <li className="ways-list">Volunteer with a local group to pick up trash in your neighborhood, local park, or beach</li>
            <li className="ways-list">Educate yourself and others on sustainable practices</li>
            <li className="ways-list">Support polinators by planting native flowers, trees, and grasses</li>
            <li className="ways-list">Watch a nature documentary</li>
            <li className="ways-list">Share what you have learned with your friends and family</li>
        </ul><br></br>
    </div>
  </>
  )
}
