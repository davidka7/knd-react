import React, { useEffect } from 'react';
import SideBar from '../component/SideBar';
import UserInfo from '../component/UserInfo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import { logout } from '../actions/userAction';
import { Link } from 'react-router-dom'
const Profile = ({signout, user}) => {

 

    return (
        <Row>
            <Col><SideBar /></Col>
        
            <Col><UserInfo user={user.user}/></Col> 
       
            <Col>  
           
            <button className="btn btn-outline-primary" onClick={signout}><Link to="/"> signout </Link> </button>
            </Col>
        </Row>
    )
}



export default connect(store => ({user: store.userContext.user}),
    (dispatch) => {
        return {
            signout: () => dispatch(logout())
        };
    })(Profile)