import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// chatGPT helped me figure out where to put the modals and I expanded on them. Also helped me with the edit formatting
const ValidationModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header className="bg-success text-white fw-bold" closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className="fw-bold">
        Please fill out all required fields before submitting the form.
      </Modal.Body>
      <Modal.Footer>
        {/* <Button className="btn-sm" variant="success" onClick={onClose}>
          Close
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default ValidationModal;
