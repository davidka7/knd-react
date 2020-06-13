import React from 'react';
import Card from "react-bootstrap/Card";
import {connect} from 'react-redux';
import Icon from './Icon';
import {onIconDrop} from '../actions/dropAction';


const FavoriteBox = ({user, onIconDrop, selectedIcon}) => {

    const handleIconDrop = () => {
      if (!user.icon_img.includes(selectedIcon.icon_img)) {
        onIconDrop(user, selectedIcon.icon_img)
      }
    }
    
    return (
        <Card 
            style={{ width: "20rem", height: "500px" }} 
            id="wrapper1" 
            onDrop={handleIconDrop} 
            onDragOver={e => e.preventDefault()} >

          <Card.Body>
          <Card.Title>Favorite Box</Card.Title>
            <Card.Text>
                {user.icon_img.map(icon => <Icon key={user.icon_img.indexOf(icon)} icon={icon}/>)}
            </Card.Text>
          </Card.Body>
        </Card>
    )
}

const mapStateToProps = (store) => {
    return {
        user: store.userContext.user,
        selectedIcon: store.draggedItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onIconDrop: (user, droppedIcon) => (onIconDrop(user, droppedIcon).then(dispatch))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteBox)