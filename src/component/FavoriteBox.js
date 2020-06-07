import React from 'react';
import Card from "react-bootstrap/Card";
import {connect} from 'react-redux';
import Icon from './Icon';
import {onIconDrop} from '../actions/dropAction';

const FavoriteBox = ({user, onIconDrop}) => {

    const handleIconDrop = () => {
        onIconDrop(user)
    }
    
    return (
        <Card 
            style={{ width: "20rem" }} 
            id="wrapper1" 
            onDrop={handleIconDrop} 
            onDragOver={e => e.preventDefault()}
        >
          <Card.Body>
          <Card.Title>Favorite Box</Card.Title>
            <Card.Text>
                {console.log('USER ICON HERE', user.icon_img)}
                {console.log('WHERE IS MY USER', user)}
                {user.icon_img.map(icon => <Icon icon={icon}/>)}
            </Card.Text>
          </Card.Body>
        </Card>
    )
}

const mapStateToProps = (store) => {
    return {user: store.userContext.user}
}

const mapDispatchToProps = (dispatch) => {
    return {
      onIconDrop: (user) => {dispatch(onIconDrop(user))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteBox)