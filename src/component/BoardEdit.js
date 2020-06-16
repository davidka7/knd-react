import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {editBoard} from '../actions/boardAction';


const BoardEdit = ({boardInfo, editBoard}) => {

    const [show, setShow] = useState(false);
    const [title, setTopic] = useState(boardInfo.title);
    const [image, setImage] = useState(boardInfo.image);

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setTopic(boardInfo.title);
        setImage(boardInfo.image);
        setShow(false)
    }
    
    const handleTopicChange = e => { setTopic(e.target.value) };
    const handleImageChange = e => { setImage(e.target.value) };

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        editBoard(title, image);
        setTopic(boardInfo.title);
        setImage(boardInfo.image);
    }

    return (
        <>
        <p onClick={handleShow}>Edit board</p>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit board {boardInfo.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="formLoginUsername">
                        <Form.Label>Edit board Topic : {boardInfo.title}</Form.Label>
                        <Form.Control 
                            type="title" 
                            placeholder="New boardInfo title..." 
                            onChange={handleTopicChange}
                            value={title}
                            />
                    </Form.Group>

                    <Form.Group controlId="formLogincPassword">
                        <Form.Label>Edit board image :</Form.Label>
                        <Form.Control 
                            type="image" 
                            placeholder="New boardInfo image..."
                            onChange={handleImageChange}
                            value={image}
                             />
                    </Form.Group>
                    
                    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                    <Button type="submit" variant="primary" onClick={handleClose}>Submit Changes</Button>
           
                </Form>
            </Modal.Body>
        </Modal>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        editBoard: (title, image, boardInfo_id) => editBoard(title, image, boardInfo_id, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(BoardEdit)