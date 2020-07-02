import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { getuser } from '../actions/userprojectAction';
import { user_project } from '../actions/userprojectAction';
import { clearUserSearch } from '../actions/userprojectAction';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Other = ({ projects, user_project, getuser, user, currentUser, clearUserSearch }) => {


    const [perso, setPerso] = useState("")
    const [show, setShow] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false)
    const handleClose = () => {setShow(false); clearUserSearch();}
    const handleShow = () => {setShow(true); setPerso('')}
    const [project1, setProjec] = useState('');

    const handleSubmit = e => {

        e.preventDefault();
        e.stopPropagation();
        if ( currentUser.username !== perso ){ getuser(perso) };
        setProjec('');
    }

    const handleSubmit1 = e => {
        e.preventDefault();
        e.stopPropagation();
        setShow(false); 
        clearUserSearch();
        user_project(user.id, project1, isAdmin);
    }

    const handleAdmin = () => setIsAdmin(!isAdmin);
    const handlePerso = e => { setPerso(e.target.value) };

    return (
        <>
         <p onClick={handleShow}>Members</p>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Project's member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                    <Form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                        <Form.Group as={Row} controlId="formPerson1">
                            <Form.Label column sm={2}>Add member</Form.Label>
                            {/* <Col sm={8}> */}
                            <Form.Control
                                type="perso"
                                placeholder="Look up username..."
                                onChange={handlePerso}
                                value={perso}
                                className={ `${user ? 'is-valid' : ''}`}
                            />
                            {/* </Col> */}
                            <Col sm={1}>
                                <Button variant="primary" type="submit" onClick={handleSubmit}> Search </Button>
                            </Col>
                        </Form.Group>
                        
                        {user ? <p className="text-success">Found username {user.username}</p> : null}
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
                                <Button type="button" variant="secondary" onClick={handleClose}> Cancel </Button>
                                <Button type="submit" variant="primary" onClick={handleSubmit1}>Share </Button>
                            </>
                            : 
                            "If you don't know your friend's username, ask them."
                        }
                        { user ?
                            <>
                            <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                            <Button type="submit" variant="primary" onClick={handleSubmit1}>Share </Button>
                            </>
                            : 
                            null
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
        user_project: (user_id, project1, isAdmin) => user_project(user_id, project1, isAdmin).then(dispatch),
        clearUserSearch: () => dispatch(clearUserSearch())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Other)