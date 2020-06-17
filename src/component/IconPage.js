import React, {useEffect} from "react";
import Card from "react-bootstrap/Card";
import { connect } from 'react-redux';
import { getMyIcons } from '../actions/iconAction';
import "./icon.css";
import IconFavoriteBox from './IconFavoriteBox';
import Icon from './Icon'
import IconTrashcan from './IconTrashcan'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const IconPage = ({ getMyIcons, icons}) => {

    useEffect(() => {
      getMyIcons();
    }, [])

    
    return (

      <div className="icon-page">
          <Row>
            <Col xs={12} md={4}>
                <Card className="icon-box">
                <Card.Title>Free box of icons</Card.Title>
                  <Row>
                      {icons.map(icon => <Icon icon={icon}/>)}
                  </Row>
                </Card>
            </Col>
        
            <Col xs={12} md={4}><IconFavoriteBox /></Col>
            <Col md={1}></Col>
            <Col xs={12} md={3}>
            <Row className="top-trash"></Row>
            <Row><IconTrashcan/></Row>
            </Col>
          </Row>
      </div>
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

