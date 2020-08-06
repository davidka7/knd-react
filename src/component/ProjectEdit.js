import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {editProject} from '../actions/projectAction';
import ProjectDelete from './ProjectDelete'


const ProjectEdit = ({project, editProject}) => {

    const [show, setShow] = useState(false);
    const [topic, setTopic] = useState(project.topic);
    const [project_id, setProjectId] = useState(project.id);
    const [imageLink, setImageLink] = useState(project.background_image);

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setTopic(project.topic);
        setImageLink(project.background_image);
        setShow(false)
    }
    
    const handleTopicChange = e => { setTopic(e.target.value) };
    const handleImageChange = e => { setImageLink(e.target.value) };

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        handleClose();
        editProject(topic, imageLink, project_id);
        console.log(topic, imageLink, project_id)
        setTopic(project.topic);
        setImageLink(project.background_image);
    }

    return (
        <>
        <p onClick={handleShow}>Edit Project</p>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit {project.topic}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="formLoginUsername">
                        <Form.Label>Edit Project Topic : <span class="text-info">{project.topic}</span></Form.Label>
                        <Form.Control 
                            type="topic" 
                            maxLength="14"
                            placeholder="New project topic..." 
                            onChange={handleTopicChange}
                            value={topic}
                            />
                    </Form.Group>

                    <Form.Group controlId="formLogincPassword">
                        <Form.Label>Edit Project image :</Form.Label>
                        <Form.Control 
                            type="imageLink" 
                            placeholder="New project image..."
                            onChange={handleImageChange}
                            value={imageLink}
                             />
                    </Form.Group>
                    
                    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                    <Button type="submit" className="btn-success" onClick={handleSubmit}>Save Changes</Button>
           
                </Form>
            </Modal.Body>
            <hr/>
            <ProjectDelete project={project}/>

        </Modal>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        editProject: (topic, imageLink, project_id) => editProject(topic, imageLink, project_id).then(dispatch),
    }
}

export default connect(null, mapDispatchToProps)(ProjectEdit)