import React, { useState } from 'react';
import { connect } from 'react-redux';
import { onIconDragStart } from '../actions/dragAction';
import "./icon.css";
import Dropdown from 'react-bootstrap/Dropdown';
import {removeIconFromCard} from '../actions/cardAction';


const IconInCard = ({card, icon, onIconDragStart}) => {

    const handleIconDrag = e => {
        e.persist();
        onIconDragStart(icon);
    }
    const [show1, setShow1] = useState(false)

    const handleIconDelete = () => {
        removeIconFromCard(card);
      }
    
    return (
        (icon) ?
        <Dropdown 
            onMouseOver={ e => setShow1(true)}
            drop="right" 
            onMouseLeave={(e) => setShow1(false)} 
            show={show1} >
            <Dropdown.Toggle variant="transparent" className="text-center" caret>
                <img className="icon-css"
                    src={require(`../images/${icon}`)} 
                    alt={icon} 
                    width="50px" 
                    onDragStart={handleIconDrag}
                />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item 
                    // onMouseOver={ () => setShow(false)} 
                    // onMouseLeave={() => setShow(false)} 
                    onClick={handleIconDelete} >
                    x
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        :
            null
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        onIconDragStart: (icon => onIconDragStart(icon, dispatch)),
        removeIconFromCard: (card) => removeIconFromCard(card).then(dispatch)
    }
}

  

export default connect(null, mapDispatchToProps)(IconInCard)