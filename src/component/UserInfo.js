import React from 'react';
import { connect } from 'react-redux';

const UserInfo = ({userInfo}) => {


    return (
        
        <div>
            <div ><h3>Your Profile</h3>
            <p>Username: {userInfo.username}</p>
            <p>Full name: {userInfo.full_name}</p>
            <p>Favorite Color: {userInfo.favorite_color}</p>
            <p>Email: {userInfo.email} </p> 
            </div>
        </div>
    )
}


const mapStateToProp = (store) => {
    return { userInfo : store.userContext.user }
}

export default connect(mapStateToProp)(UserInfo)