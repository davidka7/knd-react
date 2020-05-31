const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token()
    };
};


export const getMyProjects = () => {
    return fetch(`${BACKEND_DOMAIN}/projects`, {
        method: "GET",
        headers: headers()
    }).then(res => res.json())
    .then(res => {
        if (res.message) {
            return {
                type: "GET_MY_PROJECTS_ERROR",
                error: res.message
            };
        }
        return {
                type: "GET_MY_PROJECTS",
                payload: res
            }
        
    });
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

export const createProject = ( topic ) => {
    const project = { topic }
    return fetch(`${BACKEND_DOMAIN}/projects`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(project)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "CREATE_PROJECT_ERROR",
                error: res.error
            };
        }
        return {
            type: "CREATE_PROJECT",
            payload: res
        }
    });
}