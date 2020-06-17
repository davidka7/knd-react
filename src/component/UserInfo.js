import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

const UserInfo = ({userInfo}) => {

    return (
        <Card>
            <div ><h3>Your Profile</h3>
            <p>Username: {userInfo.username}</p>
            <p>Full name: {userInfo.full_name}</p>
            <p>Favorite Color: {userInfo.favorite_color}</p>
            <p>Email: {userInfo.email} </p> 
            </div>
        </Card>
    )
}


const mapStateToProp = (store) => {
    return { userInfo : store.userContext.user }
}

export default connect(mapStateToProp)(UserInfo)