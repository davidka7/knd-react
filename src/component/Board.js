import React from 'react'
import Card from 'react-bootstrap/Card'
import "./board.css";
import Content from './Content';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';


const Board = ({ board }) => {


  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title className="texter">{board.title}</Card.Title>
          <Card.Text className="texter">
          

            {board.cards.map( card => <Content key={card.id} card={card}/>)
            
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