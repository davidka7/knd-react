import React from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import "./board.css";
import CardContent from './CardContent';
import Button from 'react-bootstrap/Button';
import {onCardDrop} from '../actions/dropAction'

// import CreateCard from './CreateCard'


const Board = ({ boardInfo }) => {

  const handleCardDrop = () => {
    onCardDrop(boardInfo)
  }

  return (
      <Card className='board-col overflow-auto' 
            onDrop={handleCardDrop} 
            onDragOver={e => e.preventDefault()}>
        <Card.Body>
          <Card.Title className="texter">{boardInfo.title}</Card.Title>
          <Card.Text className="texter">
            {boardInfo.cards.map( card => <CardContent key={card.id} card={card}/>)}
          </Card.Text>
          {/* <CreateCard/> */}
          <Button variant="outline-primary" className='btn-block text-muted'>+ Add another card</Button>
        </Card.Body>
      </Card>

  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    onCardDrop: (board) => onCardDrop(board, dispatch )
  }
}

export default connect(null, mapDispatchToProps)(Board)