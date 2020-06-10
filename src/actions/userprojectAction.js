const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}


export const user_project = (user_id, project_id ) => {
    console.log(user_id, project_id[0].id)
    let p_id = project_id[0].id
 let userprojects={ user_project: {project_id: p_id, user_id: user_id}}
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

export const getuserprojetcs = (project_id) => {
    return fetch(`${BACKEND_DOMAIN}/projects/${project_id}`, {
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
            payload: res.boards }
        });
}
