import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Sticky from 'react-sticky-el';
import "./customization.css"
import { Link } from 'react-scroll'

const Customization = () => {

  const Settings1 = "setting1"
  const Settings2 = "setting2"
  const Settings3 = "setting3"
  const Settings4 = "setting4"
  
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
          <br />
          <br />
          <br />
          <Card border="black">
            <Card.Header id="setting2"> Icon </Card.Header>
          </Card>
          <br />
          <br />
          <br />
          <br />
          <Card border="black">
            <Card.Header id="setting3"> Board </Card.Header>
          </Card>
          <br />
          <br />
          <br />
          <br />
          <Card border="black">
            <Card.Header id="setting4"> General </Card.Header>
          </Card>
          <br />
          <br />
          <br />
          <br />

        </Card.Body>
      </Card>

    </div>
  )
}
export default Customization