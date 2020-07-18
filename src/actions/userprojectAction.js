const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}


export const user_project = (user_id, project_id, admin_permission ) => {

 let userproject = { user_project: {project_id, user_id, admin_permission }}
    return fetch(`${BACKEND_DOMAIN}/user_projects`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(userproject)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "CREATE_USER_PROJECT_ERROR",
                error: res.error
            };
        }
        return {
            type: "CREATE_USER_PROJECT",
            payload: res
        }
    });
}

export const getuserprojetcs = (id) => {

    return fetch(`${BACKEND_DOMAIN}/user_projects`, {
        method: "GET",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.message) {
            return {
                type: "GET_USER_PROJECTS_ERROR",
                error: res.message
            };
        }
        return {
            type: "GET_USER_PROJECTS",
            payload: res }
        });
}



export const getuser = (username) => {
    return fetch(`${BACKEND_DOMAIN}/users/searchUserBy/${username}`, {
        method: "GET",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        console.log(res, "ehehe")
        if (res.error) {
            return {
                type: "SEARCH_USER_ERROR",
                error: res.error
            };
        }
        return {
            type: "SEARCH_USER",
            payload: res }
        });
    
}

export const deleteUserProject = (id, dispatch) => {

    fetch(`${BACKEND_DOMAIN}/user_projects/${id.id}`, {
        method: "DELETE",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            dispatch({
                type: "DELETE_USER_PROJECT_ERROR",
                error: res.error
            });
        }
        else {
            dispatch({
                type: "DELETE_USER_PROJECT",
                id: id.project_id
            })
        }
    }).catch(err => {
        dispatch( {
            type: "DELETE_USER_PROJECT_ERROR",
            error: err
        })
    });
}

export const clearUserSearch = () => {
    return {
        type: "CLEAR_USER_FROM_SEARCH"
    }
}