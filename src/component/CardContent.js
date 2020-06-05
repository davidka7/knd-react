import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {onCardDragStart} from '../actions/dropAction'
import {deleteCard} from '../actions/cardAction'
const Content = ({card, board_id, deleteCard}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDrag = e => {
      e.persist();
      // setTimeout(() => {
      //   e.target.style.display = 'block';
      // }, 0);
      console.log("onCardDragStart: ", card)
      onCardDragStart(card, board_id);
    }

    const handleDelete = (id) => {
      deleteCard(id);
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
                <Modal.Title>{card.card_title}  <Button onClick={() => handleDelete(card.id)} type="submit">Delete</Button>
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
    deleteCard: (id) => deleteCard(id, dispatch),
    onCardDragStart: (card => onCardDragStart(card, dispatch))
  }
}
export default connect(null, mapDispatchToProps)(Content)