import React, { useState } from 'react';
import Login from '../component/Login';
import SignUp from '../component/SignUp';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';



const Account = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLogin = () => setShow(false);
    const handleSignUp = () => setShow(false);
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
                <div>
                    <div className="btn btn-outline-primary">
                        <Button onClick={handleShow}>
                            Login
      </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Login</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><div>{<Login />}</div></Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleLogin}>
                                    Submit
          </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <div className="btn btn-outline-primary">
                        <Button onClick={handleShow}>
                            SignUp
      </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>SignUp</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><div>{<SignUp/>}</div></Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleSignUp}>
                                    Submit
          </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
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
