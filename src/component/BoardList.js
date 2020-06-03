import React from 'react';
import Board from './Board';
import CardDeck from 'react-bootstrap/CardDeck';
import {connect} from 'react-redux'

import Col from 'react-bootstrap/Col';
import BoardProject from './BoardProject';
const BoardList = ({boards}) => {
console.log(boards)
    return (
        <CardDeck className='project-list'>
            {boards.boards.map( board => <Board key={board.id} boardInfo={board}/>)}
            <Col xs={6} md={2}><BoardProject boards={boards.project_id}/></Col>
        </CardDeck>  
    )
}

const mapStateToProps = (store) => {
    return {boards: store}
}

export default connect(mapStateToProps)(BoardList)