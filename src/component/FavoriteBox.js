import React from 'react';
import Card from "react-bootstrap/Card";
import {connect} from 'react-redux';
import Icon from './Icon';
import {onIconDrop} from '../actions/dropAction';

const FavoriteBox = ({icons, onIconDrop}) => {

    const handleCardDrop = () => {
        onIconDrop()
    }
    
    return (
        <Card 
            style={{ width: "20rem" }} 
            id="wrapper1" 
            onDrop={handleCardDrop} 
            onDragOver={e => e.preventDefault()}
        >
          <Card.Body>
          <Card.Title>Favorite Box</Card.Title>
            <Card.Text>
                {icons.map(icon => <Icon icon={icon}/>)}
            </Card.Text>
          </Card.Body>
        </Card>
    )
}

const mapStateToProps = (store) => {
    return {icons: store.userContext.user.icon_img}
}

const mapDispatchToProps = (dispatch) => {
    return {
      onIconDrop: () => {dispatch(onIconDrop())}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteBox)