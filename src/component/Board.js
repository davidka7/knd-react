import React from 'react'
import Card from 'react-bootstrap/Card'
import "./board.css";
import CardContent from './CardContent';
import Button from 'react-bootstrap/Button';

// import CreateCard from './CreateCard'


const Board = ({ boardInfo }) => {

  return (
    <div className='board-col'>
      <Card className='inside-board overflow-auto'>
        <Card.Body>
          <Card.Title className="texter">{boardInfo.title}</Card.Title>
          <Card.Text className="texter">
            {boardInfo.cards.map( card => <CardContent key={card.id} card={card}/>)}
          </Card.Text>
          {/* <CreateCard/> */}
          <Button variant="outline-primary" className='btn-block text-muted'>+ Add another card</Button>
        </Card.Body>
        
      </Card>
    </div>
  )
}


export default Board