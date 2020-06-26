import React from 'react';
import { connect } from 'react-redux';
import { onIconDragStart } from '../actions/dragAction';
import "./icon.css";
import Col from 'react-bootstrap/Col';

const Icon = ({icon, onIconDragStart}) => {

    const handleIconDrag = e => {
        e.persist();
        onIconDragStart(icon);
    }
    console.log(icon)

    return (
        <Col xs={12} md={4}>
            <img id="iconcss"
                src={require(`../images/${icon}`)} 
                alt={icon} 
                // width="100px" 
                onDragStart={handleIconDrag}
            />
        </Col>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIconDragStart: (icon => onIconDragStart(icon, dispatch)),
    }
}
  

export default connect(null, mapDispatchToProps)(Icon)