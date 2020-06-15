import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {editProject} from '../actions/projectAction';


const EditProject = ({project, editProject}) => {

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
        editProject(topic, imageLink);
        setTopic('');
        setImageLink('');
    }

    return (
        <>
        <p className="text-primary" onClick={handleShow}>Edit Project</p>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit project {project.topic}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formLoginUsername">
                        <Form.Label>Edit Project Topic</Form.Label>
                        <Form.Control 
                            type="topic" 
                            placeholder="Edit project topic..." 
                            onChange={handleTopicChange}
                            value={topic}
                            />
                    </Form.Group>

                    <Form.Group controlId="formLogincPassword">
                        <Form.Label>Edit Project image</Form.Label>
                        <Form.Control 
                            type="imageLink" 
                            placeholder="Edit project image..."
                            onChange={handleImageChange}
                            value={imageLink}
                             />
                    </Form.Group>
                    <Button type="submit" variant="primary" onClick={handleClose}>Submit Changes</Button>
                </Form>
            </Modal.Body>
        </Modal>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        editProject: (topic, imageLink, project_id) => editProject(topic, imageLink, project_id, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(EditProject)