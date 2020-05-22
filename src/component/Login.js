import React, { useState }  from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLogin = () => setShow(false)

    return (
        <div>
            <Button onClick={handleShow}>Login</Button>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="formLoginUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />
                        <Form.Text className="text-muted">
                        Username shouls be unique
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formLogincPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleLogin}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
        )
    }
export default Login