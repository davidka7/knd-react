import React from 'react';
import Login from '../component/Login';
import SignUp from '../component/SignUp';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import Container from 'react-bootstrap/Container';


const Account = () => {
    
    let user = "undefined"
    const list = () => {
        if (user) {
            return (
                <div>
                    <Profile/>  
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
export default Account