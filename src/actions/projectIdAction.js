const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token");

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}

export const ProjectId_save= (project_id, dispatch) => {
    
    return fetch(`${BACKEND_DOMAIN}/projects/${project_id}`, {
        method: "GET",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.message) {
            return {
                type: "GET_PROJECT_FROM_ID_ERROR",
                error: res.message
            };
        }
        dispatch({
            type: "GET_PROJECT_FROM_ID",
            payload: res
        }) 
    });
  
}