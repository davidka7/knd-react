import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Other = ({projects}) => {
    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        // createBoard(topic, imageLink, projectId);
        // setTopic('');
        // setImageLink(''); 
    }

    const [person, setPerson] = useState('');
    const [project, setProject] = useState('');
    const [projecto, setProjecto] = useState('')
    const handlePerson = e => { setPerson(e.target.value) };
    const handleProject = e => {  setProject(projects.filter(project => project.topic == e.target.value))
        
        // setProject(e.target.value)
     };

    console.log(project)

    return (
     <div> 
     Share Projects
  
        <Button variant="outline-primary" className="btn btn-block" onClick={handleShow}> Add+ </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Share Project View</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formPerson">
                        <Form.Label>Person</Form.Label>
                       
                        <Form.Control 
                            type="Person" 
                            placeholder="" 
                            onChange={handlePerson}
                            value={person}
                            />
                    </Form.Group>

                    <Form.Group controlId="Form.ControlSelect1">
                        <Form.Label>Project</Form.Label>
                        <Form.Control as="select"
                            type="Project" 
                            placeholder=""
                            onChange={handleProject}
                             value={project}
                             >
                                 {console.log(projects)}
      {projects.map(project => <option> {project.topic} </option>)}


                             </Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="primary" onClick={handleClose}>Share </Button>
                </Form>
            </Modal.Body>
        </Modal>
      
    
     
     </div>
    )
}
export default Other