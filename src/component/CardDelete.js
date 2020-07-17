import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { deleteCard } from '../actions/cardAction';


const CardDelete = ({card, deleteCard}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        deleteCard(card);
    }

    return (
        <Row className='card-del'>   
            <Col xs={6} md={6}>      
                <p>Do you want to delete card? </p>
            </Col>  
            <Col xs={6} md={6}>  
                <Button className="btn-danger" onClick={handleShow} block>Delete</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Delete card</Modal.Title>
                    </Modal.Header>
                        <Modal.Body className="text-danger">
                            Delete this card: {card.card_title}!
                        </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                        <Button type="submit" variant="danger" onClick={handleDelete}> Delete </Button>
                    </Modal.Footer>
                </Modal>   
            </Col>
        </Row>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCard: (card) => deleteCard(card, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(CardDelete)