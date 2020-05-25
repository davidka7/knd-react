import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import "./board.css"
import Content from './Content'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
// import CardDeck from 'react-bootstrap/CardDeck'
const Board = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
return (
<div>
  <Card>
    <Card.Body>
      <Card.Title className="texter">Card title</Card.Title>
      <Card.Text className="texter">
   




       <Button onClick={handleShow}>Card #####</Button>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>card #####</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Content contentId={"hehe"}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Submit</Button>
                </Modal.Footer>
            </Modal>




      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
  </Card>
</div>  
)
}

export default Board