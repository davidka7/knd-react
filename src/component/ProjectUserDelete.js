import React, {useState} from 'react';
import { deleteUserProject } from '../actions/userprojectAction';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal'


const ProjectUserDelete = ({project, deleteUserProject}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => { deleteUserProject(project[0]) }

    return (
        <>
            <p onClick={handleShow}>Unjoin Project</p>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Unjoin Project</Modal.Title>
                </Modal.Header>
                    <Modal.Body className="text-danger">
                        Unjoin means you will remove this project out of your profile.
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                    <Button type="submit" variant="danger" onClick={handleDelete}> Unjoin </Button>
                </Modal.Footer>
            </Modal>   
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserProject: (id) => deleteUserProject(id, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(ProjectUserDelete)