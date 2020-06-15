import React, {useEffect} from "react";
import Card from "react-bootstrap/Card";
import { connect } from 'react-redux';
import { getMyIcons } from '../actions/iconAction';
import "./icon.css";
import IconFavoriteBox from './IconFavoriteBox';
import Icon from './Icon'
import IconTrashcan from './IconTrashcan'

const IconPage = ({ getMyIcons, icons}) => {

    useEffect(() => {
      getMyIcons();
    }, [])

    
    return (

      <div>
          <Card style={{ width: "25rem" }} id="icon-box">
            <Card.Body>
              <Card.Text>
                {icons.map(icon => <Icon icon={icon}/>)}
              </Card.Text>
            </Card.Body>
          </Card>
        
          <IconFavoriteBox />

          <IconTrashcan/>
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

