import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ViewUserInfo = () => {
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
          <h6>Username</h6>
          <p>Lula99</p>
          <hr/>
          <h6>Gender</h6>
          <p>MALE</p>
          <hr/>
          <h6>Phone Number</h6>
          <p>0768264985</p>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewUserInfo;