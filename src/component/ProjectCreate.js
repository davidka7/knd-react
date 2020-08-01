import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';
import {createProject} from '../actions/projectAction'

const ProjectCreate = ({projects, createProject}) => {

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
        if (topic ) {createProject(topic, imageLink);}
        setTopic('');
        setImageLink('');
    }
console.log(imageLink)
    return (
        <>
        <Button variant="outline-primary" className="btn-block" onClick={handleShow}>Add +</Button>
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
                            maxLength="14"
                            placeholder="Add project topic..." 
                            onChange={handleTopicChange}
                            value={topic}
                            />
                    </Form.Group>

                    <Form.Group controlId="formLogincPassword">
                        <Form.Label>Project Image Url</Form.Label>
                        <Form.Control 
                            type="imageLink" 
                            placeholder="Add project image..."
                            onChange={handleImageChange}
                            value={imageLink}
                             />
                    </Form.Group>
                    <Button type="submit" variant="primary" onClick={handleClose}>Create </Button>
                </Form>
            </Modal.Body>
        </Modal>
        </>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (topic, imageLink) => {createProject(topic, imageLink).then(dispatch) }
    }
}

export default connect(null, mapDispatchToProps)(ProjectCreate)