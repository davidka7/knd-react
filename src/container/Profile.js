import React, { useState } from 'react';
import SideBar from '../component/SideBar';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Profile = () => {
    
    return (
        <Row>
            This is profile page
            <Col><SideBar /></Col>
            
        </Row>
    )
}
export default Profile