import React from 'react';
import Card from "react-bootstrap/Card";
import {connect} from 'react-redux';
import Icon from './Icon';
import {onIconDrop} from '../actions/dropAction';
import Row from 'react-bootstrap/Row';
import "./icon.css";


const IconFavoriteBox = ({user, onIconDrop, selectedIcon}) => {

    const handleIconDrop = () => {
      if (!user.icon_img.includes(selectedIcon.icon_img)) {
        onIconDrop(user, selectedIcon.icon_img)
      }
    }
    
    return (
        <Card 
          className="fav-box" 
          onDrop={handleIconDrop} 
          onDragOver={e => e.preventDefault()}
        >
            <Card.Title >Your Favorite Icons</Card.Title>
            <Row>
              {user.icon_img.map(icon => <Icon key={user.icon_img.indexOf(icon)} icon={icon}/>)}
            </Row>

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

export default connect(mapStateToProps, mapDispatchToProps)(IconFavoriteBox)