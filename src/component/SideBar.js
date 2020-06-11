import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userAction';
import {connect} from 'react-redux';

const SideBar = ({signout}) => {
    
    return (
        <div>
            SideBar
            <button className="btn btn-outline-primary" onClick={signout}><Link to="/"> signout </Link> </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(SideBar)