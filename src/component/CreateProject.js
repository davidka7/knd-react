import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';
import {createProject} from '../actions/projectAction'

const CreateProject = () => {
    
    const [show, setShow] = useState(false);
    const [topic, setTopic] = useState('');
    const [imageLink, setImageLink] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTopicChange = e => { setTopic(e.target.value) };
    const handleImageChange = e => { setImageLink(e.target.value) };

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        createProject(topic, imageLink);
    }

    return (
        <>
        <Button variant="outline-primary" className="btn btn-block" onClick={handleShow}>Add</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Create a new project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formLoginUsername">
                        <Form.Label>Project Topic</Form.Label>
                        <Form.Control 
                            type="topic" 
                            placeholder="Add project topic..." 
                            onChange={handleTopicChange}
                            value={topic}
                            />
                    </Form.Group>

                    <Form.Group controlId="formLogincPassword">
                        <Form.Label>Project image</Form.Label>
                        <Form.Control 
                            type="imageLink" 
                            placeholder="Add project image..."
                            onChange={handleImageChange}
                            value={imageLink}
                             />
                    </Form.Group>
                    <Button type="submit" variant="primary" onClick={'handleLogin'}>Create </Button>
                </Form>
            </Modal.Body>
        </Modal>
        </>
    );
    
}
export default connect()(CreateProject)