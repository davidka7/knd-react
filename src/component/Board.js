import React from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import "./board.css";
import CardContent from './CardContent';
import Button from 'react-bootstrap/Button';
import {onCardDrop} from '../actions/dropAction'
import {deleteBoard} from '../actions/boardAction'
import CreateCard from './CreateCard'
// import CreateCard from './CreateCard'


const Board = ({ boardInfo, onCardDrop, deleteBoard }) => {

  const handleCardDrop = () => {
    onCardDrop(boardInfo)
  }

  const handleDelete = (id) => {
    deleteBoard(id);
}
  
  return (
      <Card className='board-col overflow-auto' 
            onDrop={handleCardDrop} 
            onDragOver={e => e.preventDefault()}>
        <Card.Body>
          <Card.Title className="texter">{boardInfo.title}
 


           <Button onClick={() => handleDelete(boardInfo.id)} type="submit">Delete</Button>
           
           </Card.Title>
          <Card.Text className="texter">
            {boardInfo.cards.map( card => <CardContent key={card.id} card={card} board_id={boardInfo.id}/>)}
          </Card.Text>
          {/* <CreateCard/> */}
          <CreateCard board_id={boardInfo.id}/>
        </Card.Body>
      </Card>

  )
}



const mapDispatchToProps = (dispatch) => {
  return {
    deleteBoard: (id) => deleteBoard(id, dispatch),
    onCardDrop: (boardInfo) => {dispatch(onCardDrop(boardInfo))}
  }
}


export default connect(null, mapDispatchToProps)(Board)