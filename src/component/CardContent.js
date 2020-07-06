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
import DropdownButton from 'react-bootstrap/DropdownButton'

const Content = ({card, deleteCard, onCardDragStart, draggedItem, iconOnCardDrop}) => {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false)
    const handleCardDrag = e => {
      e.persist();
      onCardDragStart(card);
    }
    console.log(show1)

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
            <Dropdown className="d-inline-block" onMouseOver={(e) => setShow1(true)} drop={"right"}     onMouseLeave={(e) => setShow1(false)} show={show1} >
                <Dropdown.Toggle caret>
                { <IconInCard icon={card.image}/>}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item header>Delete</Dropdown.Item>
                
                </Dropdown.Menu>
            </Dropdown>
{/* <div width="50px">
            <DropdownButton
            
            drop={"right"}
            // className="ddown"
           key={"right"}
            // variant="transparent"
            // aria-expanded={false}
            title={ <IconInCard icon={card.image}/>}
            onMouseEnter={(e) => setShow1(true)}
            onMouseLeave={(e) => setShow1(false)}
            show={show1}>
          <Dropdown.Item href="#" eventKey="1">Delete</Dropdown.Item>
   
            </DropdownButton>
   </div> */}

                {card.card_title} 
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
             

              <Dropdown>
  <Dropdown.Toggle variant="transparent" id="dropdown-basic">
  <IconInCard icon={card.image}/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Delete</Dropdown.Item>
  
  </Dropdown.Menu>
</Dropdown>


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