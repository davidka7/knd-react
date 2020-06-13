import React from 'react';
import { connect } from 'react-redux';
import { onIconDragStart } from '../actions/dragAction';

const Icon = ({icon, onIconDragStart}) => {

    const handleIconDrag = e => {
        e.persist();
        onIconDragStart(icon);
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
        onIconDragStart: (icon => onIconDragStart(icon, dispatch)),
    }
}
  

export default connect(null, mapDispatchToProps)(Icon)