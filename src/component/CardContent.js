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
import Dropdown from 'react-bootstrap/Dropdown';
import {removeIconFromCard} from '../actions/cardAction';
import CardDelete from './CardDelete';

const Content = ({card, deleteCard, onCardDragStart, draggedItem, iconOnCardDrop, removeIconFromCard}) => {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false)

    
    const handleCardDrag = e => {
      e.persist();
      onCardDragStart(card);
    }


    const handleItemDrop = () => {
      draggedItem.icon_img ? iconOnCardDrop(card, draggedItem.icon_img) : cardOnCardDrop(draggedItem, card)
    }

    const handleIconDelete = () => {
      removeIconFromCard(card);
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
              {card.image === '' || card.image == undefined ?
                null
                :
                <Dropdown className="sizers" 
                    onMouseOver={ e => setShow1(true)}
                    drop="right" 
                    onMouseLeave={e => setShow1(false)} 
                    show={show1} >
                    <Dropdown.Toggle variant="transparent" caret>
                      <IconInCard icon={card.image}/>
                    </Dropdown.Toggle >
                    <Dropdown.Menu className="sizer">
                      <Dropdown.Item className="sizer"
                        onMouseOver={ () => setShow(false)} 
                        onMouseLeave={() => setShow(false)} 
                        onClick={handleIconDelete}
                        >
                      x
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
              }
                  {card.card_title} 
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
             
                <IconInCard icon={card.image}/>
              
                <Modal.Title>Edit card</Modal.Title>
                
              </Modal.Header>
                <Modal.Body>
                  <h5>Title: </h5> {card.card_title}
                  <h5>Description: </h5> {card.content}
                </Modal.Body>
                <hr/>
                <CardDelete card={card}/>
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
    removeIconFromCard: (card) => removeIconFromCard(card).then(dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)