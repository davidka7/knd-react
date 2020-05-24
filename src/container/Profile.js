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
            <Col><button className="btn btn-outline-primary">Signout </button></Col>
        </Row>
    )
}
export default Profile