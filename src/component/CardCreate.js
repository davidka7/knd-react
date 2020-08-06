import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';
import {createCard} from '../actions/cardAction';
import './card.css'

const CardCreate = ({createCard, board_id}) => {

    const [show, setShow] = useState(false);
    const [card_title, setTopic] = useState('');
    const [content, setContent] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTopicChange = e => { setTopic(e.target.value) };
    const handleContentChange = e => { setContent(e.target.value) };

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        if (card_title){createCard(card_title, content, board_id);}
        setTopic('');
        setContent('');
    }

    return (
        <div className='btn-add-card'>
    
        <Button variant="outline-secondary" onClick={handleShow} block>+ Add card</Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Create a new Card</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formLoginUsername">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="card_title" 
                            maxLength="14"
                            placeholder="Add project topic..." 
                            onChange={handleTopicChange}
                            value={card_title}
                            />
                    </Form.Group>

                    <Form.Group controlId="formLogincPassword">
                        <Form.Label>Content</Form.Label>
                        <Form.Control 
                            as="textarea" rows="3"
                            type="Content" 
                            placeholder="Add description..."
                            onChange={handleContentChange}
                            value={content}
                             />
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
        createCard: (card_title, content, board_id) => {createCard(card_title, content, board_id).then(dispatch) }
    }
}

export default connect(null, mapDispatchToProps)(CardCreate)