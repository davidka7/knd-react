import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Other = ({projects}) => {
    // const [show1, setShow1] = useState(false);

    // const handleClose1 = () => setShow1(false);
    // const handleShow1 = () => setShow1(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [person1, setPerso] = useState('');
    const [project1, setProjec] = useState('');
    const [person, setPerson] = useState('');
    const [project, setProject] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        // createBoard(topic, imageLink, projectId);
        // setTopic('');
        // setImageLink(''); 
    }
    const handleSubmit1 = e => {
        e.preventDefault();
        e.stopPropagation();
        // createBoard(topic, imageLink, projectId);
        // setTopic('');
        // setImageLink(''); 
    }
   
    // const [projecto, setProjecto] = useState('')
    const handlePerson = e => { setPerson(e.target.value) };
    const handleProject = e => {  setProject(projects.filter(project => project.topic == e.target.value))  };
     
   
        // setProject(e.target.value)
   

 const handlePerso = e => { setPerso(e.target.value) };
 const handleProjec = e => {  setProjec(projects.filter(project => project.topic == e.target.value))};
     
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
           
            <Modal.Title> Add Admin To Project</Modal.Title>
          
                <Form onSubmit={handleSubmit1}>
                    <Form.Group controlId="formPerson1">
                        <Form.Label>Person</Form.Label>
                       
                        <Form.Control 
                            type="Person1" 
                            placeholder="" 
                            onChange={handlePerso}
                            value={person1}
                            />
                    </Form.Group>

                    <Form.Group controlId="Form.ControlSelect1">
                        <Form.Label>Project</Form.Label>
                        <Form.Control as="select"
                            type="Project1" 
                            placeholder=""
                            onChange={handleProjec}
                             value={project1}
                             >
                                 {console.log(projects)}
      {projects.map(project => <option> {project.topic} </option>)}


                             </Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="primary" onClick={handleClose}>Share </Button>
                </Form>
            </Modal.Body>
        </Modal>
        {/* <Button variant="outline-primary" className="btn btn-block" onClick={handleShow1}> Add+ </Button>
        <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
            <Modal.Title>Share Project View</Modal.Title>
            </Modal.Header>
            <Modal.Body>
           
           
            <Modal.Title> Add Admin To Project</Modal.Title>
          
                <Form onSubmit={handleSubmit1}>
                    <Form.Group controlId="formPerson1">
                        <Form.Label>Person</Form.Label>
                       
                        <Form.Control 
                            type="Person1" 
                            placeholder="" 
                            onChange={handlePerso}
                            value={person1}
                            />
                    </Form.Group>

                    <Form.Group controlId="Form.ControlSelect2">
                        <Form.Label>Project</Form.Label>
                        <Form.Control as="select1"
                            type="Project1" 
                            placeholder=""
                            onChange={handleProjec}
                             value={project1}
                             >
                                 {console.log(projects)}
      {projects.map(project => <option> {project.topic} </option>)}


                             </Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="primary" onClick={handleClose1}>Share </Button>
                </Form>
            </Modal.Body>
        </Modal>
     */}
     
     </div>
    )
}
export default Other