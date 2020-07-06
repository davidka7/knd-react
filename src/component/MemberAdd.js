import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { getuser } from '../actions/userprojectAction';
import { user_project } from '../actions/userprojectAction';
import { clearUserSearch } from '../actions/userprojectAction';


const MemberAdd = ({ projects, user_project, getuser, user, currentUser, clearUserSearch }) => {


    const [perso, setPerso] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)
    const [project1, setProjec] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        if (currentUser.username !== perso) { getuser(perso) }
        setProjec('');
    }

    const handleSubmit1 = e => {
        e.preventDefault();
        clearUserSearch();
        user_project(user.id, project1, isAdmin);
    }

    const handleAdmin = () => setIsAdmin(!isAdmin);
    const handlePerso = e => { setPerso(e.target.value) };

    return (
        <>
            <Form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
                <Form.Group controlId="formPerson1">
                    <Form.Label>Search new member</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Type username..."
                        onChange={handlePerso}
                        value={perso}
                        className={`${user ? 'is-valid form-control mr-sm-2' : 'form-control mr-sm-2'}`}
                    />
                </Form.Group>
                <Button className="btn-secondary my-2 my-sm-0" type="submit" onClick={handleSubmit}> Search </Button>
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
                        <Button type="button" variant="secondary" > Cancel </Button>
                        <Button type="submit" variant="primary" onClick={handleSubmit1}>Share </Button>
                    </>
                    :
                    <p className="text-muted">If you don't know your friend's username, ask them.</p>
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
        user_project: (user_id, project1, isAdmin) => user_project(user_id, project1, isAdmin).then(dispatch),
        clearUserSearch: () => dispatch(clearUserSearch())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MemberAdd)
