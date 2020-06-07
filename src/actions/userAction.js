const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
}

// export const getUser = (id) => {
  
    

//     return fetch(`${BACKEND_DOMAIN}/users/${id}`, {
//         method: "GET",
//         headers: headers(),
//     }).then(res => res.json())
//     .then(res => {
//         if (res.error) {
//             return {
//                 type: "LOGIN_ERROR",
//                 error: res.error
//             };
//         }
//         return {
//             type: "LOGIN",
//             payload: res
//         }
//     });
// }
const loginSignup = (apiUrl, username, password) => {
    console.log(apiUrl, username, password)
    
    const user = { user: { username, password} }
    return fetch(apiUrl, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(user)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "LOGIN_ERROR",
                error: res.error
            };
        }
        return {
            type: "LOGIN",
            payload: res
        }
    });
}

export const login = (username, password) => {
    return loginSignup(`${BACKEND_DOMAIN}/login`, username, password);
}

export const signup = (email, username, full_name, favorite_color, password) => {

    const user = {
        user: {
            username,
            full_name,
            favorite_color,
            email,
            password
        }
    }
    return fetch(`${BACKEND_DOMAIN}/users`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(user)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "SIGNUP_ERROR",
                error: res.error
            };
        }
        return {
            type: "SIGNUP",
            payload: res
        }
    }); 

}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}
