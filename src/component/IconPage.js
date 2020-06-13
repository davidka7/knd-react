import React, {useEffect} from "react";
import Card from "react-bootstrap/Card";
import { connect } from 'react-redux';
import { getMyIcons } from '../actions/iconAction';
import "./icon.css";
import FavoriteBox from './FavoriteBox';
import Icon from './Icon'
import Trashcan from './Trashcan'

const IconPage = ({ getMyIcons, icons}) => {

    useEffect(() => {
      getMyIcons();
    }, [])

    
    return (

      <div>
          <Card style={{ width: "25rem" }} id="wrapper">
            <Card.Body>
              <Card.Text>
                {console.log(icons)}
                {icons.map(icon => <Icon icon={icon}/>)}
              </Card.Text>
            </Card.Body>
          </Card>

          <Trashcan/>
        
          <FavoriteBox />
      </div>
    );
};


const mapDispatchToProps = (dispatch) => {
  console.log("MAP DISPATCH TO PROP GET MY ICON WORKS")
  return {
      getMyIcons: () => getMyIcons(dispatch)
  }
}

const mapStatetoProps = (store) => {
  console.log("MAP STATE TO PROP WORKS", store.icons)
  return {icons: store.icons}
}

export default connect(mapStatetoProps, mapDispatchToProps)(IconPage)

