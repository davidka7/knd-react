import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signup } from '../actions/userAction';
import { connect } from 'react-redux';

const SignUp = ({signup, signupError}) => {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [fullName, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [color, setColor] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUsernameChange = e => {setUsername(e.target.value)}
    const handleFullNameChange = e => {setFullname(e.target.value)}
    const handleEmailChange = e => {setEmail(e.target.value)}
    const handlePasswordChange = e => {setPassword(e.target.value)}
    const handleColorChange = e => {setColor(e.target.value)}
    const handleConfirmPasswordChange = e => {setConfirmPassword(e.target.value)}

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        signup(username, fullName, email, color, password);
        setShow(false);
    }

    return (
        <div>
            <Button onClick={handleShow} className="btn-success signup">SignUp</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>SignUp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formLoginUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="username" 
                                placeholder="Enter username" 
                                onChange={handleUsernameChange}
                                value={username}
                                />
                            <Form.Text className="text-muted">
                            Username should be unique
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formLoginFullname">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control 
                            type="fullname" 
                            placeholder="Enter your full name." 
                            onChange={handleFullNameChange}
                            value={fullName}
                            />
                        </Form.Group>

                        <Form.Group controlId="formLoginEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            onChange={handleEmailChange}
                            value={email}
                            />
                    </Form.Group>

                        <Form.Group controlId="formLoginColor">
                            <Form.Label>Favorite colors</Form.Label>
                            <Form.Control 
                                type="favorite" 
                                placeholder="Enter your favorite color" 
                                onChange={handleColorChange}
                                value={color}
                                />
                        </Form.Group>

                        <Form.Group controlId="formLoginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                onChange={handlePasswordChange}
                                value={password}
                                />
                            <Form.Text className="text-muted">
                                Password should be more than 6 characters
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formLoginConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Confirm your password" 
                            onChange={handleConfirmPasswordChange}
                            value={confirmPassword}
                            />
                            
                        </Form.Group>
                        <Button type="submit" className="btn-success signup" >Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (username, fullName, email, favorite_color, password) => signup(username, fullName, email, favorite_color, password).then(dispatch)
    }
}

const mapStateToProps = (store) => {
    return {signupError: store.userContext.signupError}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);