import React, {useEffect} from "react";
import Card from "react-bootstrap/Card";
import { connect } from 'react-redux';
import { getMyIcons } from '../actions/iconAction';
import "./icon.css";
import IconFavoriteBox from './IconFavoriteBox';
import Icon from './Icon'
import IconTrashcan from './IconTrashcan'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const IconPage = ({ getMyIcons, icons}) => {

    useEffect(() => {
      getMyIcons();
    }, [])

    
    return (

      <Container>
          <Row>
            <Col xs={12} md={4}>
              <Card style={{ width: "25rem" }} id="icon-box">
                <Card.Body>
                  <Card.Text>
                    {icons.map(icon => <Icon icon={icon}/>)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        
            <Col xs={12} md={4}><IconFavoriteBox /></Col>

            <Col xs={12} md={4}><IconTrashcan/></Col>
          </Row>
      </Container>
    );
};


const mapDispatchToProps = (dispatch) => {
  return {
      getMyIcons: () => getMyIcons(dispatch)
  }
}

const mapStatetoProps = (store) => {
  return {icons: store.icons}
}

export default connect(mapStatetoProps, mapDispatchToProps)(IconPage)

