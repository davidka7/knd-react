import React from 'react';
import SideBar from '../component/SideBar';
import UserInfo from '../component/UserInfo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Profile = () => {

    return (
        <Row>
            <Col><SideBar /></Col>
            <Col><UserInfo /></Col> 
            <Col></Col>
        </Row>
    )
}


export default Profile