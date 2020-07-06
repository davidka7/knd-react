
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Sticky from 'react-sticky-el';
// import "./customization.css"
import { Link } from 'react-scroll'
// import './Project.css'
import React, {useEffect, useState} from "react";

const Settings = () => {

  const Settings1 = "setting1"
  const Settings2 = "setting2"
  const Settings3 = "setting3"
  const Settings4 = "setting4" 
  const handleClick1 = e => {
    setSize(e.target.value)
    if (e.target.value == 0){

    }
 else if (e.target.value == 1) {

 }
 }
 const [size, setSize] =useState(1)
  
  return (
    <div>
      
      <Sticky>
        <header>
          <Card className="text-left" border="white">
            <Card.Header id="colors">Content Page</Card.Header >
            <ListGroup >
              <ListGroup.Item id="colors"> <Link
                activeClass="active"
                to={Settings1}
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >Redirect To {"Profile #"}
              </Link></ListGroup.Item>

              <ListGroup.Item id="colors"> <Link
                activeClass="active"
                to={Settings2}
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >Redirect To {"Icon #"}
              </Link></ListGroup.Item>

              <ListGroup.Item id="colors"> <Link
                activeClass="active"
                to={Settings3}
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >Redirect To {"Board #"}
              </Link></ListGroup.Item>

              <ListGroup.Item id="colors"> <Link
                activeClass="active"
                to={Settings4}
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >Redirect To {"General #"}
              </Link></ListGroup.Item>
            </ListGroup>
          </Card>
        </header>
      </Sticky>

      <Card className="text-right" border="white">
        <Card.Body>
          <Card border="black">
            <Card.Header id="setting1"> Profile </Card.Header>
          </Card>
          <br />

          <Card border="black">
            <Card.Header id="setting2"> Icon </Card.Header>
          </Card>

          <input id="ruin" type="range" min={0} max={1} value={size} onChange={handleClick1}/>

          <Card border="black">
            <Card.Header id="setting3"> Board </Card.Header>
          </Card>

          <Card border="black">
            <Card.Header id="setting4"> General </Card.Header>
          </Card>

        </Card.Body>
      </Card>

    </div>
  )
}
export default Settings