import React from 'react';
import { Button, Form, Input, Label } from "reactstrap";

export default function Contact() {
    return (
    <>
        <div className="contact-container fieldguide-app border border-white border-3 pt-4 p-2 mt-4">
            <h4 className="contact-header">
                Contact Us
            </h4>
                <Form className="contact-form">
                    <p className="contact-form-text">Please fill out the form below and a member of our team will reach out to you. <br></br> Thank you for your interest in our work!</p>
                    <Input className="contact-input mb-2" type="text" name="firstName" placeholder="First Name" required> </Input>
                    <Input className="contact-input mb-2" type="text" name="lastName" placeholder="Last Name"> </Input>
                    <Input className="contact-input mb-2" type="text" name="email" placeholder="Email" required> </Input>
                    <Input className="contact-input mb-2" type="text area" name="notes" placeholder="Is there anything you would like to let us know?"></Input>
                    <Input className="mb-2 contact-btn rounded" type="submit" value="Submit"> </Input>
                </Form><br></br>
        </div>
        </>
    );
}