import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUser } from '@fortawesome/free-solid-svg-icons';
import profileIcon from '../../assets/profile-icon.png'
import SendMessage from './SendMessage';
import ToMessage from './ToMessage';
import FromMessage from './FromMessages';

function CardMessages() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="view-profile-btn nav-link" onClick={handleShow} href="#myModal"><FontAwesomeIcon className='' icon={faComment} /></a>
      <Modal
      id='myModal'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>Lulamile Plati</Modal.Header>
        <Modal.Body>

        <div className="flex-1 overflow-y-auto p-4">
            <div className="h-[500px] overflow-y-scroll flex flex-col space-y-2">
                <ToMessage/>
                <FromMessage/>
                <ToMessage/>
                <FromMessage/>
                <ToMessage/>              
                <FromMessage/>
                <ToMessage/>              
                <FromMessage/>
                <ToMessage/>             
                <FromMessage/>
                <ToMessage/>              
                <FromMessage/>
                <ToMessage/>          
                <FromMessage/>
                <ToMessage/>             
                <FromMessage/>
            </div>
        </div>
        <SendMessage/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardMessages;