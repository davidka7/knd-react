import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signup } from '../actions/userAction';
import { connect } from 'react-redux';

const SignUp = ({signup, signupError}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSignUp = () => setShow(false);

    return (
        <div>
            <Button onClick={handleShow} className="btn-success signup">SignUp</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>SignUp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formLoginUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" />
                            <Form.Text className="text-muted">
                            Username should be unique
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formLoginFullname">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="fullname" placeholder="Enter your full name." />
                        </Form.Group>

                        <Form.Group controlId="formLoginEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                        <Form.Group controlId="formLoginColor">
                            <Form.Label>Favorite colors</Form.Label>
                            <Form.Control type="favorite" placeholder="Enter your favorite color" />
                        </Form.Group>

                        <Form.Group controlId="formLoginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="text-muted">
                                Password should be more than 6 characters
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formLoginConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm your password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-success signup" onClick={handleSignUp}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (email, username, full_name, favorite_color, password) => signup(email, username, full_name, favorite_color, password).then(dispatch)
    }
}

const mapStateToProps = (store) => {
    return {signupError: store.userContext.signupError}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);