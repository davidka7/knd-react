import React from 'react';
import { connect } from 'react-redux'
import Login from '../component/Login';
import SignUp from '../component/SignUp';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import Container from 'react-bootstrap/Container';
import SignoutButton from '../component/SignoutButton';
const Account = ({userInfo}) => {
    
    const list = () => {
        if (userInfo.userContext.user) {
            console.log(userInfo)
            return (
               
                <div>
   
                    <Profile />  
                 
                    <Link className="btn btn-outline-primary" to="/homepage"> Homepage </Link>
                </div >
            )
        }
        else {
            return (
                <div>
                    <Login/>
                    <SignUp/> 
                </div>
            )
        }
    }
    return (
        <Container>
            Home Page Data
            {list()}
        </Container>
    )
}

const mapStateToProp = (store) => {
    return { userInfo : store }
}

export default connect(mapStateToProp)(Account)