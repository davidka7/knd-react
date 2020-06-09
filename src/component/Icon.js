import React from 'react';
import {connect} from 'react-redux';
import {onIconDragStart} from '../actions/dropAction';
import {iconSaveAction} from '../actions/iconSaveAction';

const Icon = ({icon, onIconDragStart, iconSaveAction}) => {

    const handleIconDrag = e => {
        e.persist();
        // setTimeout(() => {
        //   e.target.style.display = 'block';
        // }, 0);
        onIconDragStart(icon);
        iconSaveAction(icon);
    }
    
    return (
        <row>
            <column> 
                <img 
                    src={require(`../images/${icon}`)} 
                    alt={icon} 
                    height="130px" width="130px" 
                    onDragStart={handleIconDrag}
                    />
            </column> 
        </row>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      onIconDragStart: (icon) => onIconDragStart(icon, dispatch),
      iconSaveAction: (icon => iconSaveAction(icon, dispatch)),
    }
}
  

export default connect(null, mapDispatchToProps)(Icon)