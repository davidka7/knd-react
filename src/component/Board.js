import React from 'react'
import Card from 'react-bootstrap/Card'
import "./Board.css"
// import CardDeck from 'react-bootstrap/CardDeck'
const Board = () => {


return (

<div>
  <Card>
  
    <Card.Body>
      <Card.Title className="texter">Card title</Card.Title>
      <Card.Text className="texter">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
  </Card>

</div>

    
)



}


export default Board