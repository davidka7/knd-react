const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")


const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token()
    };
  };

export const getMyIcons = (dispatch) => {
    return fetch(`${BACKEND_DOMAIN}/icons`, {
        method: "GET",
        headers: headers()
    }).then(res => res.json())
    .then(res => {
        if (res.message) {
            return {
                type: "GET_MY_ICONS_ERROR",
                error: res.message
            };
        }
        dispatch(
            {
                type: "GET_MY_ICONS",
                payload: res
            }
        ) 
    });
}