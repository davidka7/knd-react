import React, { useState }  from 'react';
import Login from '../component/Login';
import SignUp from '../component/SignUp';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';



const Account = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    let user = undefined
    const list = () => {
        if (user) {
            return (
                <div>
                    <button className="btn btn-outline-primary">Signout </button>
                    <Link className="btn btn-outline-primary" to="/homepage"> Homepage </Link>
                </div >
            )
        }
        else {
            return (
                // <div> {<Login />} {<SignUp />} </div>
                <div className="btn btn-outline-primary">
                    <Button onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
                </div>
            )
        }
    }
    return (
        <div>
            Home Page Data
            {list()}
        </div>
    )
}
export default Account