import React from 'react';
import { Button, Form, Input, Label } from "reactstrap";

export default function Contact() {
    return (
    <>
        <div>
            <h4 className="contact-header">
                Contact Us
            </h4>
                <Form className="contact-form">
                    <p className="contact- form-text">Please fill out the form below and a member of our team will reach out to you. <br></br> Thank you for your interest in our work!</p>
                    <Input className="m-2" type="text" name="firstName" placeholder="First Name" required> </Input>
                    <Input className="m-2" type="text" name="lastName" placeholder="Last Name"> </Input>
                    <Input className="m-2" type="text" name="email" placeholder="Email" required> </Input>
                    <Input className="m-2" type="text area" name="notes" placeholder="Is there anything you would like to let us know?"></Input>
                    <Input className="m-2 contact-btn rounded" type="submit" value="Submit"> </Input>
                </Form><br></br>
        </div>
        </>
    );
}