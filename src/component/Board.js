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


const Board = ({ boardInfo, onCardDrop, draggedItem }) => {

  const handleCardDrop = () => {
    draggedItem.icon_img ?  console.log("hi") : onCardDrop(boardInfo, draggedItem) 
  }
  
  return (
    <div className='board-col' 
        onDrop={handleCardDrop} 
        onDragOver={e => e.preventDefault()}>

        <Card className="board-box">
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
            <div className="texter overflow-auto">
              {boardInfo.cards.map( card => <CardContent key={card.id} card={card} board_id={boardInfo.id}/>)}
            </div>
            <CardCreate board_id={boardInfo.id}/>
        </Card>
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
    onCardDrop: (boardInfo, draggedItem) => (onCardDrop(boardInfo, draggedItem)).then(dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Board)