import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
// import UpdateForm from './UpdateForm';

export default function EditBtnModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="edit-modal">
      <button onClick={handleShow} className="review-btn btn border-secondary bg-white form-control mb-2" variant="white">
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-dark"> Edit Your Observation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* <UpdateForm /> */}
        </Modal.Body>
      </Modal>
    </div>
  );
}