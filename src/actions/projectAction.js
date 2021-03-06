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

export const createProject = ( topic, imageLink) => {
    const project = { topic, background_image: imageLink }
    console.log(imageLink)
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

export const deleteProject = (id, dispatch) => {

    fetch(`${BACKEND_DOMAIN}/projects/${id}`, {
        method: "DELETE",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            dispatch({
                type: "DELETE_PROJECT_ERROR",
                error: res.error
            });
        }
        else {
            dispatch({
                type: "DELETE_PROJECT",
                id: id
            })
        }
    }).catch(err => {
        dispatch( {
            type: "DELETE_PROJECT_ERROR",
            error: err
        })
    });
}

export const editProject = ( topic, imageLink, project_id ) => {
    const project = { 
        project: { project_id, topic, background_image: imageLink} 
    }
    return fetch(`${BACKEND_DOMAIN}/projects/${project_id}`, {
        method: "PUT",
        headers: headers(),
        body: JSON.stringify(project)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "EDIT_PROJECT_ERROR",
                error: res.error
            };
        }
        console.log(res,"kim ehh")
        return {
            type: "EDIT_PROJECT",
            payload: res
        }
    });
}