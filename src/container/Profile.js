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
            <Col>
                QUOTE:
                <p className="text-warning">I have a dream I hope it will come true</p>
                <p className="text-warning">That you will grow old with me, and I will grow old with you</p>
                <p className="text-warning">We thank the earth, sea, and the sky we thank too</p>
            </Col>
        </Row>
    )
}


export default Profile