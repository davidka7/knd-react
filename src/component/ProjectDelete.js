import React, {useState} from 'react';
import { deleteProject } from '../actions/projectAction';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ProjectDelete = ({project, deleteProject}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        deleteProject(project.id);
    }

    return (
        <Row className='del-p'>   
            <Col xs={6} md={6}>      
                <p>Do you want to delete project {project.topic} ? </p>
            </Col>  
            <Col xs={6} md={6}>  
                <Button className="btn-danger" onClick={handleShow} block>Delete Project</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Delete {project.topic} project</Modal.Title>
                    </Modal.Header>
                        <Modal.Body className="text-danger">
                            Deleting means you will lose all cards and disconnect all members in this project: {project.topic}!
                        </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                        <Button type="submit" variant="danger" onClick={handleDelete}> Delete </Button>
                    </Modal.Footer>
                </Modal>   
            </Col>
        </Row>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject: (project_id) => deleteProject(project_id, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(ProjectDelete)