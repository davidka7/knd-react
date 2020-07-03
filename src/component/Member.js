import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import MemberEdit from './MemberEdit';
import MemberAdd from './MemberAdd';



const Member = ({ project }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false); }
    const handleShow = () => { setShow(true); }


    return (
        <>
            <p onClick={handleShow}>Members</p>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Project's member</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <MemberAdd project={project}/>
                    <MemberEdit project={project}/>
                    
                </Modal.Body>
            </Modal>

        </>
    )
}


export default Member