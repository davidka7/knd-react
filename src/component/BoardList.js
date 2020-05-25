import React from 'react'
import Board from './Board'
import CardDeck from 'react-bootstrap/CardDeck'
const BoardList = () => {


return (

<div>
<CardDeck>
<Board/>
<Board/>
<Board/>
<Board/>
</CardDeck>
    </div>
    
)
}


export default BoardList