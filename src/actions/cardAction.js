const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}

export const getCards = (board_id) => {
    return fetch(`${BACKEND_DOMAIN}/boards/${board_id}`, {
        method: "GET",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.message) {
            return {
                type: "GET_ALL_CARDS_ERROR",
                error: res.message
            };
        }
        return {
            type: "GET_ALL_CARDS",
            payload: res.cards }
        });
}