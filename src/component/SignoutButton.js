import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import { logout } from '../actions/userAction';
const SignoutButton = ({signout}) => {
    
    return (
        <div>
            <button className="btn btn-outline-primary" onClick={signout}><Link to="/"> signout </Link> </button>
        </div>
    )
}


export default connect(store => ({user: store.userContext.user}),
    (dispatch) => {
        return {
            signout: () => dispatch(logout())
        };
    })(SignoutButton)