import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import EditPrice from '../edit-components/EditPrice';
import EditName from '../edit-components/EditName';
import EditDescription from '../edit-components/EditDescription';

function EditItemModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="nav-link" onClick={handleShow} href="#editModal"><FontAwesomeIcon className="text-blue-500" icon={faPen} /></a>
      <Modal
      id='editModal'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Seller Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <h5>Item Name</h5>
              <div className='pt-2' >
                <h6 >Iphone 7</h6>
              </div>
              <EditName/>
            </div>
            <hr/>
            <div>
              <h5>Item Price</h5>
              <div className='pt-2'>
                <h6 className=''>R3000.000</h6>       
              </div>
              <EditPrice/>
            </div>
            <hr/>
            <div className='flex flex-row space-x-52'>
              <h5>Item Category</h5>
            </div>
            <div className='pt-2' >
              <h6 >John Doe</h6>
            </div>
            <hr/>
            <div>
              <h5>Item Description</h5>
              <div className='pt-2' >
                <h6 >Black</h6>
              </div>
              <EditDescription/>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditItemModal;