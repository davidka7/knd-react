import React from 'react'
import Board from './Board'
import CardDeck from 'react-bootstrap/CardDeck'

const BoardList = ({projectId}) => {


    return (
        <CardDeck className='project-list'>
            {projectId.map( board => <Board board={board}/>)}
        </CardDeck>  
    )
}


export default BoardList