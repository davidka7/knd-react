import React, {useEffect} from 'react';
import Board from './Board';
import CardDeck from 'react-bootstrap/CardDeck';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import BoardCreate from './BoardCreate';
import {getBoards} from '../actions/boardAction'
import './board.css'

const BoardList = ({boards, getBoards}) => {
    const { projectId } = useParams();

    useEffect(() =>{
        getBoards(projectId)
    }, []);

    return (

        <CardDeck>
            {boards.map( board => <Board key={board.id} boardInfo={board}/>)}
            <BoardCreate projectId={projectId}/>
        </CardDeck>  

    )
}

const mapStateToProps = (store) => {
    return {boards: store.boards}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBoards: (projectId) => getBoards(projectId).then(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardList)