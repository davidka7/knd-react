const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}


export const user_project = (user_id, project_id, admin ) => {
    let p_id = project_id[0].id
 let userprojects={ user_project: {project_id: p_id, user_id: user_id, admin_permission: admin}}
    return fetch(`${BACKEND_DOMAIN}/user_projects`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(userprojects)
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



export const getuser = (name) => {
    return fetch(`${BACKEND_DOMAIN}/users/${name}`, {
        method: "GET",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        console.log(res, "ehehe")
        // if (res !== null)
        // {
        if (res.message) {
            return {
                type: "GET_USER_ERROR",
                error: res.message
            };
        }
    
        return {
            type: "GET_USER",
            payload: res }
        });
    
}

export const deleteUserProject = (id, dispatch) => {
    console.log(id)
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