import React from 'react';
import SideBar from '../component/SideBar';
import UserInfo from '../component/UserInfo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import { logout } from '../actions/userAction';

const Profile = ({signout}) => {

    return (
        <Row>
            <Col><SideBar /></Col>
            <Col><UserInfo /></Col>
            <Col><button className="btn btn-outline-primary" onClick={signout}>Signout </button></Col>
        </Row>
    )
}

const mapStateToProps = (store) => {
    return {user: store.userContext.user}
}

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)