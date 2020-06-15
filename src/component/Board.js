import React from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import "./board.css";
import CardContent from './CardContent';
import Button from 'react-bootstrap/Button';
import { onCardDrop } from '../actions/dropAction'
import { deleteBoard } from '../actions/boardAction'
import CreateCard from './CreateCard'
import Dropdown from 'react-bootstrap/Dropdown';


const Board = ({ boardInfo, onCardDrop, deleteBoard, selectedCard }) => {

  const handleCardDrop = () => {
    onCardDrop(boardInfo, selectedCard)
  }

  const handleDelete = (board_id) => {
    deleteBoard(board_id);
}
  
  return (
      <Card className='board-col overflow-auto' 
            onDrop={handleCardDrop} 
            onDragOver={e => e.preventDefault()}>
        <Card.Body>

        <Card.Title>
              <Dropdown alignRight>
                    <Dropdown.Toggle className="custom-select" id="dropdown-basic" block>
                        <h5>{boardInfo.title}</h5>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Header>Options</Dropdown.Header>
                        <hr></hr>
                        <Dropdown.Item>
                          <Button onClick={() => handleDelete(boardInfo.id)} type="submit">Delete</Button>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
          </Card.Title>
            <Card.Text className="texter">
              {boardInfo.cards.map( card => <CardContent key={card.id} card={card} board_id={boardInfo.id}/>)}
            </Card.Text>
            <CreateCard board_id={boardInfo.id}/>
          </Card.Body>
      </Card>

  )
}

const mapStateToProps = (store) => {
  return {
    selectedCard: store.draggedItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBoard: (board_id) => deleteBoard(board_id, dispatch),
    onCardDrop: (boardInfo, selectedCard) => (onCardDrop(boardInfo, selectedCard)).then(dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Board)