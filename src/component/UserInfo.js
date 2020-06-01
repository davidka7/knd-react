import React, {useState} from 'react';
import { connect } from 'react-redux';

const UserInfo = ({userInfo}) => {

// const [username, setUsername] = useState(user ? user.username : 's');
// const [full_name, setFullname] = useState(user ? user.full_name : '');
// const [favorite_color, setFavoritecolor] = useState(user ? user.favorite_color : '');
// const [email, setEmail] = useState(user ? user.email : '');
// console.log(userInfo.userContext.user)
// console.log(userInfo)
// console.log(user)
console.log(userInfo)
    return (
        
        <div>
        <div ><h3>Your Profile</h3>
            <p>Username: {userInfo.username}</p>
            <p>Full name: {userInfo.full_name}</p>
            <p>Favorite Color: {userInfo.favorite_color}</p>
            <p>Email: {userInfo.email} </p> </div>
        
       
        </div>
    )
}


// const mapStateToProp = (store) => {
//     return { userInfo : store.userContext.user }
// }

export default connect(store => ({userInfo: store.userContext.user}))(UserInfo)