import React from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import "./board.css";
import CardContent from './CardContent';
import { onCardDrop } from '../actions/dropAction'
import CardCreate from './CardCreate'
import Dropdown from 'react-bootstrap/Dropdown';
import BoardDelete from './BoardDelete';
import BoardEdit from './BoardEdit'


const Board = ({ boardInfo, onCardDrop, selectedCard }) => {

  const handleCardDrop = () => {
    onCardDrop(boardInfo, selectedCard)
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
                      <Dropdown.Item><BoardEdit boardInfo={boardInfo}/></Dropdown.Item>
                      <Dropdown.Item><BoardDelete boardInfo={boardInfo}/></Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
          </Card.Title>
            <Card.Text className="texter">
              {boardInfo.cards.map( card => <CardContent key={card.id} card={card} board_id={boardInfo.id}/>)}
            </Card.Text>
            <CardCreate board_id={boardInfo.id}/>
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
    onCardDrop: (boardInfo, selectedCard) => (onCardDrop(boardInfo, selectedCard)).then(dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Board)