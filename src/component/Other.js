import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { getuser } from '../actions/userprojectAction';
import { user_project } from '../actions/userprojectAction';
import { clearUserSearch } from '../actions/userprojectAction';


const Other = ({ projects, user_project, getuser, user, currentUser, clearUserSearch }) => {

    // useEffect(() => {
    //     console.log(person1)
    //     getuser(person1);
    // }, [])
    // const [show1, setShow1] = useState(false);

    // const handleClose1 = () => setShow1(false);
    // const handleShow1 = () => setShow1(true);
    // const [user_id, setId] = useState("")
    const [perso, setPerso] = useState("")
    const [show, setShow] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false)
    const handleClose = () => {setShow(false); clearUserSearch();}
    const handleShow = () => {setShow(true); setPerso('')}
    // const [person1, setPerso] = useState('');
    const [project1, setProjec] = useState('');
    // const [person, setPerson] = useState('');
    // const [project, setProject] = useState('');


    const handleSubmit = e => {
        // console.log("GET HERE")
        e.preventDefault();
        e.stopPropagation();
        console.log("GET HERE")
        if ( currentUser.username !== perso ){ getuser(perso) }
        setProjec('');
    }

    const handleSubmit1 = e => {
        e.preventDefault();
        e.stopPropagation();
        // setId(user.id)
        // console.log(user_id);
        console.log("GET HERE")
        setShow(false); 
        clearUserSearch();
        user_project(user.id, project1, isAdmin);
        // setId('')
        // setProjec('');
    }
    // const handleId = () => {
    //     user_project()

    // }
    // const [projecto, setProjecto] = useState('')
    // const handlePerson = e => { setPerson(e.target.value) };
    // const handleProject = e => {  setProject(projects.filter(project => project.topic == e.target.value))  };


    const handleAdmin = () => setIsAdmin(!isAdmin);
    const handlePerso = e => { setPerso(e.target.value) };
    
console.log(user)

console.log(projects)
    return (
        <>
         <p onClick={handleShow}>Add Member </p>
            {/* <Button variant="outline-primary" onClick={handleShow} block> Add Member </Button> */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Admin To Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                    <Form onSubmit={handleSubmit}>
                        <>
                        <Form.Group controlId="exampleForm.ControlInput1" role="form">
                            <Form.Label>Person</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="user"
                                onChange={handlePerso}
                                value={perso}
                                className={ `${user ? 'is-valid' : ''}`}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}> Search </Button>
                        {user ? <p className="text-success">Found username {user.username}</p> : null}
</>
                       
                    </Form>
                    <Form onSubmit={handleSubmit1}>
                        {user ?
                            <>

                                <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label>Admin can edit and delete this project.</Form.Label>
                                    <Form.Check 
                                        type="switch"
                                        id="isAdmin-switch"
                                        label={`Make ${user.username} admin`}
                                        onChange={handleAdmin}
                                        value={isAdmin}
                                    />
                                </Form.Group>
                            </>
                            : 
                            ("Awaiting User")
                        }
                        { user ?
                            <><Button variant="secondary" onClick={handleClose}> Cancel </Button>
                            <Button type="submit" variant="primary" onClick={handleSubmit1}>Share </Button></>
                            : 
                            <div >"haha"</div>
                        }
                    </Form>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}
const mapStateToProps = (store) => {
    return { 
        user: store.user_share,
        currentUser: store.userContext.user
     }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getuser: (perso) => getuser(perso).then(dispatch),
        // c1: (person, project) => c1(person, project).then(dispatch),
        user_project: (user_id, project1, isAdmin) => user_project(user_id, project1, isAdmin).then(dispatch),
        clearUserSearch: () => dispatch(clearUserSearch())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Other)