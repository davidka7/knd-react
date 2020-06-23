import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import { logout } from '../actions/userAction';

const Signout = ({signout}) => {
    
    return ( <Link to="/" onClick={signout}> Signout </Link> )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Signout)