const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

export const getMyProjects = (dispatch) => {

    return fetch(`${BACKEND_DOMAIN}/projects`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token()
        },
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
