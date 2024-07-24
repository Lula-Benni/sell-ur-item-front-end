import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ViewUserInfo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [profile,setProfile] = useState([])
  const [contact,setContact] = useState([])

  useEffect(() => {
      loadProfile()
      loadContact()
  },[])

  const loadProfile = async () => {
      const result = await axios.get("http://localhost:8182/get-profile/254")
      setProfile(result.data)
  }
  const loadContact = async () => {
      const result = await axios.get("http://localhost:8182/get-contact/204")
      setContact(result.data)
  }
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
          <p>{profile.userName}</p>
          <hr/>
          <h6>Gender</h6>
          <p>{profile.gender}</p>
          <hr/>
          <h6>Phone Number</h6>
          <p>{contact.cellNumber}</p>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewUserInfo;