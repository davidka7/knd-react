import React from 'react';
import UserInfo from '../component/UserInfo';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './profile.css'


const Profile = () => {

    return (
        <Row className='profile-page'>
            <Col><UserInfo /></Col>
            <Col> <Card>
                QUOTE:
                <p className="text-warning">I have a dream I hope it will come true.
                That you will grow old with me, and I will grow old with you.
                We thank the earth, sea, and the sky we thank too.</p>
                </Card>
            </Col>
        </Row>
    )
}


export default Profile