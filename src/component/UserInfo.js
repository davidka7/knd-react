import React from 'react';

const SideBar = () => {

    const u = {
        username: 'kim',
        full_name: 'Ngan Kim Khong',
        favorite_color: 'blue',
        email: 'nk@gmail.com',
    }
    
    return (
        <div>
            <h3>Your Profile</h3>
            <p>Username: {u.username}</p>
            <p>Full name: {u.full_name}</p>
            <p>Favorite Color: {u.favorite_color}</p>
            <p>Email: {u.email}</p>
        </div>
    )
}
export default SideBar