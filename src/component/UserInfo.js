import React, {useState} from 'react';
import { connect } from 'react-redux';

const UserInfo = ({userInfo, user}) => {

const [username, setUsername] = useState(user ? user.username : 's');
const [full_name, setFullname] = useState(user ? user.full_name : '');
const [favorite_color, setFavoritecolor] = useState(user ? user.favorite_color : '');
const [email, setEmail] = useState(user ? user.email : '');
console.log(userInfo.userContext.user)
console.log(userInfo)
console.log(user)

    return (
        
        <div>
        <div ><h3>Your Profile</h3>
            <p>Username: {username}</p>
            <p>Full name: {full_name}</p>
            <p>Favorite Color: {favorite_color}</p>
            <p>Email: {email} </p> </div>
        
       
        </div>
    )
}


// const mapStateToProp = (store) => {
//     return { userInfo : store.userContext.user }
// }

export default connect(store => ({userInfo: store}))(UserInfo)