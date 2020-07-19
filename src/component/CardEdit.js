import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardEdit = ({card}) => {

    const [show, setShow] = useState(false);
    const [card_title, setTopic] = useState(card.card_title);
    const [content, setContent] = useState(card.content);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTopicChange = e => { setTopic(e.target.value) };
    const handleContentChange = e => { setContent(e.target.value) };

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        
    }

    return (
        
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formLoginUsername">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="card_title" 
                            placeholder={card.card_title}
                            onChange={handleTopicChange}
                            value={card_title}
                            />
                    </Form.Group>

                    <Form.Group controlId="formLogincPassword">
                        <Form.Label>Content</Form.Label>
                        <Form.Control 
                            as="textarea" rows="3"
                            type="Content" 
                            placeholder={card.content}
                            onChange={handleContentChange}
                            value={content}
                             />
                    </Form.Group>
                    {/* <Button type="submit" variant="primary" onClick={handleClose}>Change </Button> */}
                </Form>
            
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(null, mapDispatchToProps)(CardEdit)