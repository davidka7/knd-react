import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userAction';
import {connect} from 'react-redux';
import Signout from './Signout'

const SideBar = ({signout}) => {
    
    return (
        <div>
            SideBar
            <Signout/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(SideBar)