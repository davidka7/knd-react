import React from 'react'
import Card from 'react-bootstrap/Card'
import "./board.css";
import Content from './Content';
import Button from 'react-bootstrap/Button';



const Board = ({ board }) => {

  return (
    <div className='board-col'>
      <Card style={{margin: '5px'}}>
        <Card.Body>
          <Card.Title className="texter">{board.title}</Card.Title>
          <Card.Text className="texter">
            {board.cards.map( card => <Content key={card.id} card={card}/>)}
          </Card.Text>
          {/* <Button className="add-card-css btn-block " variant="outline-primary" disable> </Button> */}
          <Button variant="outline-primary" className='btn-block text-muted'>+ Add another card</Button>
        </Card.Body>
        
      </Card>
    </div>
  )
}

export default Board