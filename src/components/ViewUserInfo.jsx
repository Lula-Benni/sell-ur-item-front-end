import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function ViewUserInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="view-profile-btn nav-link" onClick={handleShow} href="#myModal"><FontAwesomeIcon className='' icon={faUser} /></a>
      <Modal
      id='myModal'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Seller Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>FullName</h6>
          <p>Lulamile Plati</p>
          <hr/>
          <h6>Username</h6>
          <p>Lula99</p>
          <hr/>
          <h6>Contacts</h6>
          <h6>Email</h6>
          <p>Lulamile Plati</p>
          <h6>Phone Number</h6>
          <p>Lulamile Plati</p>
          <hr/>
          <h6>Address</h6>
          <p>Lulamile Plati</p>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewUserInfo;