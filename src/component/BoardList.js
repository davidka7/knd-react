import React from 'react'
import Board from './Board'
import CardDeck from 'react-bootstrap/CardDeck'

const BoardList = ({projectId}) => {

    console.log("boardlist ", projectId)
return (
    
    <div>
        <CardDeck>
            {projectId.map( board => <Board board={board}/>)}
        
        </CardDeck>
    </div>
        
    )
}


export default BoardList