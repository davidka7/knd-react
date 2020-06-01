import React from 'react';
import Board from './Board';
import CardDeck from 'react-bootstrap/CardDeck';
import {connect} from 'react-redux'

const BoardList = ({boards}) => {


    return (
        <CardDeck className='project-list'>
            {boards.map( board => <Board board={board}/>)}
        </CardDeck>  
    )
}

const mapStateToProps = (store) => {
    return {boards: store.boards}
}


export default connect(mapStateToProps)(BoardList)