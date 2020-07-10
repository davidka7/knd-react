import React, { useState } from 'react';
import { connect } from 'react-redux';
import { onIconDragStart } from '../actions/dragAction';
import "./icon.css";


const IconInCard = ({card, icon}) => {

    const handleIconDrag = e => {
        e.persist();
        onIconDragStart(icon);
    }

    
    return (
        (icon) ?
        <img className="icon-css"
            src={require(`../images/${icon}`)} 
            alt={icon} 
            width="50px" 
            onDragStart={handleIconDrag}
        />
        :
        null
            
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        onIconDragStart: (icon => onIconDragStart(icon, dispatch)),
    }
}

  

export default connect(null, mapDispatchToProps)(IconInCard)