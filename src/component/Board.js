import React from 'react'
import Card from 'react-bootstrap/Card'
import "./board.css";
import Content from './Content';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

<<<<<<< HEAD
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
return (
<div>
  <Card>
    <Card.Body>
      <Card.Title className="texter">Card title</Card.Title>
      <Card.Text className="texter">
   
       <Button onClick={handleShow}>Card #####</Button>
=======

const Board = ({ board }) => {


  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title className="texter">{board.title}</Card.Title>
          <Card.Text className="texter">
          

            {board.cards.map( card => <Content key={card.id} card={card}/>)
>>>>>>> f9dea2cbee9b8d3e4be2b20334a62cce0f610008
            
          }


          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
      </Card>
    </div>
  )
}

export default Board