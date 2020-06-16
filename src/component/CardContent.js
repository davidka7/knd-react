import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './card.css'
import { connect } from 'react-redux';
import { deleteCard } from '../actions/cardAction';
import { onCardDragStart } from '../actions/dragAction';
import { cardOnCardDrop } from '../actions/dropAction';

const Content = ({card, deleteCard, onCardDragStart, selectedCard}) => {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCardDrag = e => {
      e.persist();
      onCardDragStart(card);
    }

    const handleDelete = (card) => {
      deleteCard(card);
    }

    const handleOtherCardDrop = () => {
      cardOnCardDrop(selectedCard, card)
    }
    
    return (
        <div>
            <Button 
              variant="outline-primary" 
              className='btn-block cardButton' 
              onClick={handleShow}
              draggable
              onDragStart={handleCardDrag}
              onDrop={handleOtherCardDrop} 
              onDragOver={e => e.preventDefault()}
              >{card.card_title} 
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{card.card_title}  <Button onClick={() => handleDelete(card)} type="submit">Delete</Button>
                </Modal.Title>
              </Modal.Header>
                <Modal.Body>
                  {card.content}
                </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>Submit</Button>
              </Modal.Footer>
            </Modal>
        </div>
    )
}
const mapStateToProps = (store) => {
  return {
    selectedCard: store.draggedItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: card => deleteCard(card, dispatch),
    onCardDragStart: (card) => onCardDragStart(card, dispatch),
    cardOnCardDrop: (dragCard, destinationCard) => cardOnCardDrop(dragCard, destinationCard, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)