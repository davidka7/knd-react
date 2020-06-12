import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';
// import {c1, c2} from '../actions/shareAction'
import {user_project} from '../actions/userprojectAction'
const Other = ({projects, user_project}) => {
    // const [show1, setShow1] = useState(false);

    // const handleClose1 = () => setShow1(false);
    // const handleShow1 = () => setShow1(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [person1, setPerso] = useState('');
    const [project1, setProjec] = useState('');
    // const [person, setPerson] = useState('');
    // const [project, setProject] = useState('');
   
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     c1(person, project);
    //     setPerson('');
    //     setProject(''); 
    // }
    const handleSubmit1 = e => {
        e.preventDefault();
        e.stopPropagation();
        user_project(person1, project1);
        setPerso('');
        setProjec(''); 
    }
    // const handleId = () => {
    //     user_project()
        
    // }
    // const [projecto, setProjecto] = useState('')
    // const handlePerson = e => { setPerson(e.target.value) };
    // const handleProject = e => {  setProject(projects.filter(project => project.topic == e.target.value))  };
     
   
        // setProject(e.target.value)
   

 const handlePerso = e => { setPerso(e.target.value) };
 const handleProjec = e => {  setProjec(projects.filter(project => project.topic === e.target.value))};
     
  

    return (
     <div> 
     Share Projects
  
        <Button variant="outline-primary" className="btn btn-block" onClick={handleShow}> Add+ </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title> Add Admin To Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit1}>
                    <Form.Group controlId="formPerson1">
                        <Form.Label>Person</Form.Label>
                       
                        <Form.Control 
                            type="person1" 
                            placeholder="name" 
                            onChange={handlePerso}
                            value={person1}
                            />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Project</Form.Label>
                        <Form.Control as="select" multiple
                            type="project1" 
                            placeholder=""
                            onChange={handleProjec}
                             value={project1}
                             >
                             
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
const mapDispatchToProps = (dispatch) => {
    return {
     
        // c1: (person, project) => c1(person, project).then(dispatch),
        user_project: (person1, project1) => user_project(person1, project1).then(dispatch),
    }
}
export default connect(null, mapDispatchToProps)(Other)