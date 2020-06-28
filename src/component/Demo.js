import React, { useState }  from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { login } from '../actions/userAction';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Demo = ({ signin, loginError }) => {
    
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        signin(username, '123');
        setUsername('');
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleKimDemo = () => { setUsername('kim')};
    const handleDavidDemo = () => { setUsername('david')};

    return (
        <div>
            <Button onClick={handleShow} className="btn-warning signin">Demo</Button>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login with demo account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formLoginUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="username" 
                                placeholder="Enter username" 
                                value={username}
                                className={`${loginError ? ' is-invalid' : ''}`}
                                />
                        </Form.Group>

                        <Form.Group controlId="formLogincPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password"
                                value='123'
                                className={`${loginError ? ' is-invalid' : ''}`}
                                />
                        </Form.Group>
                        <br/>
                        Login as:
                        <br/>
                        <Row>
                            <Col xs={6} md={6}><Button className="btn-secondary" onClick={handleKimDemo} block>Kim</Button></Col>
                            <Col xs={6} md={6}><Button className="btn-secondary" onClick={handleDavidDemo} block>David</Button></Col>
                        </Row>
                        <br/>
                        <Button className="btn-info" type="submit" block>Login</Button>
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
    return {loginError: store.userContext.loginError}
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Demo);