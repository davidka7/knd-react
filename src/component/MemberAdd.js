import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { getuser } from '../actions/userprojectAction';
import { user_project } from '../actions/userprojectAction';
import { clearUserSearch } from '../actions/userprojectAction';
import Row from 'react-bootstrap/Row';
import "./MemberAdd.css";

const MemberAdd = ({ project, user_project, getuser, user, currentUser, clearUserSearch }) => {


    const [perso, setPerso] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        if (!(currentUser.username == perso || isMember(perso))) { getuser(perso) }
    }

    const isMember = (findUsername) => {
        return project.user_projects.find(e => e.user.username === findUsername)
    }

    const handleSubmit1 = e => {
        e.preventDefault();
        clearUserSearch();
        user_project(user.id, project.id, isAdmin);
    }

    const handleAdmin = () => setIsAdmin(!isAdmin);
    const handleAdmin1 = () => setIsAdmin(isAdmin);
    const handlePerso = e => { 
        setPerso(e.target.value);
        if (isMember(e.target.value)) {}
    };

    return (
        <>
            <Form onSubmit={handleSubmit} >
                <Form.Group as={Row} controlId="formPerson1">
                <Form.Label column sm={4}>Search new member</Form.Label>
                    <div sm={4} id="change">

                        <Form.Control
                            type="text"
                            id="change-width"
                            placeholder="Type username..."
                            onChange={handlePerso}
                            value={perso}
                            className={`${user ? 'is-valid form-control mr-sm-2' : 'form-control mr-sm-2'}`}
                        />
                    
                    <Button id="change-width1" className="btn-secondary my-2 my-sm-0" type="submit" onClick={handleSubmit}> Search </Button>
                </div>
                </Form.Group>
                
                {user ? <p className="text-success">Found username! {user.username}</p> : null}
            </Form>
            <Form onSubmit={handleSubmit1}>
                {user ?
                    <>
           
                        <Form.Group >
                        <Button 
                                onChange={handleAdmin}
                                value={isAdmin} variant="transparent" > {`Make ${user.username} admin`}</Button>
                        /<Button 
                                onChange={handleAdmin1}
                                value={isAdmin} variant="transparent" >{`Make ${user.username} Viewer`}</Button>
                            <Form.Label>Click. Admin can edit and delete this project.</Form.Label>
                         
                           
                        </Form.Group>
                        <Button type="button" variant="secondary" > Cancel </Button>
                        {
                        <Button type="submit" variant="primary" onClick={handleSubmit1}>Share </Button>
}
                    </>
                    :
                    <p className="text-muted">Enter the username to look for user.</p>
                }
            </Form>


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
        user_project: (user_id, projectId, isAdmin) => user_project(user_id, projectId, isAdmin).then(dispatch),
        clearUserSearch: () => dispatch(clearUserSearch())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MemberAdd)
