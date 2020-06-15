import React, {useState} from 'react';
import { deleteProject } from '../actions/projectAction';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal'


const EditProject = ({project, deleteProject}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        deleteProject(project.id);
    }

    return (
        <>
            <Button onClick={handleShow}>Delete Project</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Delete {project.topic} project</Modal.Title>
                </Modal.Header>
                    <Modal.Body>Deleting means you will lose all cards and disconnect all members in this project: {project.topic}!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button type="submit" variant="primary" onClick={handleDelete}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>   
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject: (project_id) => deleteProject(project_id, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(EditProject)