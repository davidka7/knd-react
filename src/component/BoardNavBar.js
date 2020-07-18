import React from 'react';
import './board.css';
import Dropdown from 'react-bootstrap/Dropdown';
import IconFavoriteBox from './IconFavoriteBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';;


const BoardNavBar = ({projectInfo, userInfo}) => {


    return (
        <Row className='b-nav'>
            {projectInfo.topic} | Team members: {userInfo.username}, 
            {/* {projectInfo.user_projects.map( u_p => <>'hi'</>)} */}
            {console.log(projectInfo.user_projects)}
            <Dropdown className="icon-btn">
                <Dropdown.Toggle variant="secondary" id="dropdown-button-drop-left">
                    Fav Icons
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <IconFavoriteBox/>
                </Dropdown.Menu>
            </Dropdown>
        </Row>
    )
}

const mapStateToProp = (store) => {
    return { userInfo : store.userContext.user }
}

export default connect(mapStateToProp)(BoardNavBar)