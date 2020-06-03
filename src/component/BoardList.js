import React from 'react';
import Board from './Board';
import CardDeck from 'react-bootstrap/CardDeck';
import {connect} from 'react-redux'

const BoardList = ({boards}) => {
    console.log(boards)

    return (
        <CardDeck className='project-list'>
            
            {boards.map( board => <Board key={board.id} boardInfo={board}/>)}
        </CardDeck>  
    )
}

const mapStateToProps = (store) => {
    return {boards: store.boards}
}

export default connect(mapStateToProps)(BoardList)