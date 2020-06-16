import React from 'react';
import { connect } from 'react-redux';
import { removeIcon } from '../actions/dropAction';


const IconTrashcan = ({user, removeIcon, selectedIcon}) => {

    const handleIconDrop = () => {
        removeIcon(user, selectedIcon)
    }

    return (
        <img 
            className="lol"
            src={require(`../images/funny.png`)} 
            alt={"funny"} 
            height="350px"
            onDrop={handleIconDrop} 
            onDragOver={e => e.preventDefault()}
        />
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
        removeIcon: (user, selectedIcon) => removeIcon(user, selectedIcon).then(dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(IconTrashcan)

