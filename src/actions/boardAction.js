const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

export const getBoards = (project_id, dispatch) => {

    return fetch(`${BACKEND_DOMAIN}/projects/${project_id}`, {
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
                type: "GET_ALL_BOARDS_ERROR",
                error: res.message
            };
        }
        dispatch(
            {
                type: "GET_ALL_BOARDS",
                payload: res.boards
            }
        ) 
    });
}

