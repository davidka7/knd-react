import React, { useState }  from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { login } from '../actions/userAction';

const SignIn = ({ signin }) => {
    
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = e => { setUsername(e.target.value) }
    const handlePasswordChange = e => { setPassword(e.target.value) }

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        signin(username, password);
        setUsername('');
        setPassword('');
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button onClick={handleShow} className="btn-info signin">Login</Button>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
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
                            Username shouls be unique
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formLogincPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password"
                                onChange={handlePasswordChange}
                                value={password}
                                />
                        </Form.Group>
                        <Button type="submit" variant="primary" onClick={handleClose}>Log in</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
        )
    }

const mapDispatchToProps = (dispatch) => {
    return {
        signin: (username, password) => login(username, password).then(dispatch)
    }
}

const mapStateToProps = (store) => {
    return {loginError: store.userContext.error}
}
    
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);