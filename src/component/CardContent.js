import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import IconInCard from './IconInCard';
import { iconOnCardDrop } from '../actions/dropAction';
import './card.css'
import { connect } from 'react-redux';
import { deleteCard } from '../actions/cardAction';
import { onCardDragStart } from '../actions/dragAction';
import { cardOnCardDrop } from '../actions/dropAction';

const Content = ({card, deleteCard, onCardDragStart, draggedItem, iconOnCardDrop}) => {
  
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

    const handleItemDrop = () => {
      draggedItem.icon_img ? iconOnCardDrop(card, draggedItem.icon_img) : cardOnCardDrop(draggedItem, card)
    }

    
    return (
        <div>
            <Button 
              variant="outline-primary" 
              className='btn-block cardButton' 
              onClick={handleShow}
              draggable
              onDragStart={handleCardDrag}
              onDrop={handleItemDrop} 
              onDragOver={e => e.preventDefault()}
              >
                  <IconInCard icon={card.image} card={card}/>
                  {card.card_title} 
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>

              
  <IconInCard icon={card.image}/>


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
    draggedItem: store.draggedItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: card => deleteCard(card, dispatch),
    onCardDragStart: (card) => onCardDragStart(card, dispatch),
    cardOnCardDrop: (dragCard, destinationCard) => cardOnCardDrop(dragCard, destinationCard, dispatch),
    iconOnCardDrop: (selectedCard, droppedIcon) => iconOnCardDrop(selectedCard, droppedIcon).then(dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)