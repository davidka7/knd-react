import React from 'react';
import { connect } from 'react-redux';
import './home.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Signout from '../component/Signout'


const Account = ({userInfo}) => {
    
    return (

        <>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="btn-secondary my-2 my-sm-0">
                    Hi, {userInfo.username} !
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Header>{userInfo.username}'s account</Dropdown.Header>
                    <hr></hr>
                    <Dropdown.Item><Link to="/profile"> Profile </Link></Dropdown.Item>
                    <hr></hr>
                    <Dropdown.Item> <Signout/> </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

const mapStateToProp = (store) => {
    return { userInfo : store.userContext.user }
}

export default connect(mapStateToProp)(Account)