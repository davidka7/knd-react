const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token()
    };
  };

export const getMyProjects = (dispatch) => {
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
        dispatch(
            {
                type: "GET_MY_PROJECTS",
                payload: res
            }
        ) 
    });
}

export const createProject = (user_id, topic ) => {
    const project = { user_id, topic }
    return fetch(`${BACKEND_DOMAIN}/projects`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(project)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "CREATE_PROJEC_ERROR",
                error: res.error
            };
        }
        return {
            type: "CREATE_PROJECT",
            payload: res
        }
    });
}