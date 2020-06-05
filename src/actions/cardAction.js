const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token()
    };
};

export const deleteCard = (id, dispatch) => {
    fetch(`${BACKEND_DOMAIN}/cards/${id}`, {
        method: "DELETE",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            dispatch( {
                type: "DELETE_CARD_ERROR",
                error: res.error
            });
        }
        else {
            dispatch(
                {
                    type: "DELETE_CARD",
                    id: id
                }
            );
        }
    }).catch(err => {
        dispatch( {
            type: "DELETE_CARD_ERROR",
            error: err
        })
    });
}