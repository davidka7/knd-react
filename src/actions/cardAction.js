const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token()
    };
};

export const deleteCard = (card, dispatch) => {
    fetch(`${BACKEND_DOMAIN}/cards/${card.id}`, {
        method: "DELETE",
        headers: headers(),
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            dispatch({
                type: "DELETE_CARD_ERROR",
                error: res.error
            });
        }
        else {
            dispatch({
                type: "DELETE_CARD",
                card: card
            });
        }
    }).catch(err => {
        dispatch({
            type: "DELETE_CARD_ERROR",
            error: err
        })
    });
}

export const createCard = ( card_title, content, board_id ) => {
    let c = { card_title, content, board_id }
    return fetch(`${BACKEND_DOMAIN}/cards`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(c)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "CREATE_CARD_ERROR",
                error: res.error
            };
        }
        return {
            type: "CREATE_CARD",
            payload: res
        }
    });
}

export const removeIconFromCard = (selectedCard) => {

    const card = { image: '' }

    return fetch(`${BACKEND_DOMAIN}/cards/${selectedCard.id}`, {
        method: "PUT",
        headers: headers(),
        body: JSON.stringify(card)
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "REMOVE_ICON_FROM_CARD_ERROR",
                error: res.error
            };
        }

        return {
            type: "REMOVE_ICON_FROM_CARD",
            payload: res.card
        }
    });
}