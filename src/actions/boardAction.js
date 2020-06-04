const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}
export const createBoard = ( topic, imageLink, projectId ) => {
    
    const entry = {
      
            title: topic,
            image: imageLink,
            project_id: projectId

    }
    console.log(topic, imageLink, projectId)
    return fetch(`${BACKEND_DOMAIN}/boards`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(entry)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "CREATE_BOARD_ERROR",
                error: res.error
            };
        }
        return {
            type: "CREATE_BOARD",
            payload: res
        }
    });
}

export const getBoards = (project_id) => {
    return fetch(`${BACKEND_DOMAIN}/projects/${project_id}`, {
        method: "GET",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.message) {
            return {
                type: "GET_BOARDS_FROM_PROJECT_ERROR",
                error: res.message
            };
        }
        return {
            type: "GET_BOARDS_FROM_PROJECT",
            payload: res.boards }
        });
}

export const deleteBoard = (id, dispatch) => {
    fetch(`${BACKEND_DOMAIN}/boards/${id}`, {
        method: "DELETE",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            dispatch( {
                type: "DELETE_BOARD_ERROR",
                error: res.error
            });
        }
        else {
            dispatch(
                {
                    type: "DELETE_BOARD",
                    id: id
                }
            );
        }
    }).catch(err => {
        dispatch( {
            type: "DELETE_BOARD_ERROR",
            error: err
        })
    });
}