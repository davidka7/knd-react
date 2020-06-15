import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';
import {createBoard} from '../actions/boardAction'
import './board.css'

const AddBoard = ({createBoard, projectId}) => {

    const [show, setShow] = useState(false);
    const [topic, setTopic] = useState('');
    const [imageLink, setImageLink] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTopicChange = e => { setTopic(e.target.value) };
    const handleImageChange = e => { setImageLink(e.target.value) };


    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        createBoard(topic, imageLink, projectId);
        setTopic('');
        setImageLink(''); 
    }

    return (
        <div className="board-col">
            <Button variant="outline-primary" onClick={handleShow} block>Add board</Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton> <Modal.Title>Create a new Board</Modal.Title> </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formLoginUsername">
                            <Form.Label>Board Add</Form.Label>
                            <Form.Control 
                                type="topic" 
                                placeholder="Add Board topic..." 
                                onChange={handleTopicChange}
                                value={topic} />
                        </Form.Group>

                        <Form.Group controlId="formLogincPassword">
                            <Form.Label>Board Background</Form.Label>
                            <Form.Control 
                                type="imageLink" 
                                placeholder="Add Board image..."
                                onChange={handleImageChange}
                                value={imageLink} />
                        </Form.Group>
                        <Button type="submit" variant="primary" onClick={handleClose}>Create </Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        createBoard: (topic, imageLink, projectId) => {createBoard(topic, imageLink, projectId).then(dispatch) }
    }
}

export default connect(null, mapDispatchToProps)(AddBoard)