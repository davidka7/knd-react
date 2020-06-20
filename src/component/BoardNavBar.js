import React from 'react';
import './board.css';
import Dropdown from 'react-bootstrap/Dropdown'
import IconFavoriteBox from './IconFavoriteBox';


const BoardNavBar = ({projectInfo}) => {


    return (
        <span>
            Project: {projectInfo.topic}
            <Dropdown className="icon-btn">
                <Dropdown.Toggle variant="secondary" id="dropdown-button-drop-left">
                    Fav Icons
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <IconFavoriteBox/>
                </Dropdown.Menu>
            </Dropdown>
        </span>
    )
}


export default BoardNavBar