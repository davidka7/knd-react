import React from 'react';
import Board from './Board';
import CardDeck from 'react-bootstrap/CardDeck';
import BoardCreate from './BoardCreate';
import './board.css'

const BoardList = ({boards, projectInfo}) => {

    return (
        <CardDeck>
            {boards.map( board => <Board key={board.id} boardInfo={board}/>)}
            <BoardCreate projectId={projectInfo.id}/>
        </CardDeck>  
    )
}


export default BoardList