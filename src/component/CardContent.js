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
import Dropdown from 'react-bootstrap/Dropdown'

const Content = ({card, deleteCard, onCardDragStart, draggedItem, iconOnCardDrop}) => {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false)
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

    const handleIconDelete = () => {
      console.log("GET HERE")
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
              <Dropdown 
                  onMouseOver={ e => setShow1(true)}
                  drop="right" 
                  onMouseLeave={(e) => setShow1(false)} 
                  show={show1} >
                  <Dropdown.Toggle variant="transparent" caret>
                    <IconInCard icon={card.image}/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item 
                      onMouseOver={ e => setShow(false)} 
                      onMouseLeave={(e) => setShow(false)} 
                      onClick={handleIconDelete}>
                      X
                      </Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
                  {card.card_title} 
            </Button>
{console.log(show)}
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