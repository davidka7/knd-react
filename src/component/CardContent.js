import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {onCardDragStart} from '../actions/dropAction'
import {deleteCard} from '../actions/cardAction'
import {cardSaveAction} from '../actions/iconSaveAction';
const Content = ({card, board_id, deleteCard, cardSaveAction}) => {
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDrag = e => {
      e.persist();
      console.log("onCardDragStart: ", card)
      onCardDragStart(card, board_id);
      cardSaveAction(card)
    }

    const handleDelete = (card) => {
      deleteCard(card);
  }
    
    return (
        <div>
            <Button 
              variant="outline-primary" 
              className='btn-block' 
              onClick={handleShow}
              draggable
              onDragStart={handleDrag}
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (card) => deleteCard(card, dispatch),
    onCardDragStart: ((card,board_id) => onCardDragStart(card, board_id).then(dispatch)),
    cardSaveAction: (icon => cardSaveAction(icon, dispatch)),
  }
}
export default connect(null, mapDispatchToProps)(Content)