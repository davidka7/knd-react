let card = null
let icon = null
let formerBoardId = null

const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token()
    };
};


export const onCardDragStart = (card_obj, board_id) => {

    card = card_obj;
    formerBoardId = board_id

}

export const onCardDrop = (droppedBoard) => {
    console.log(droppedBoard, card)
    let cardz={card_title: card.card_title, content: card.content, board_id: droppedBoard.id}
    fetch(`${BACKEND_DOMAIN}/cards/${card.id}`, {
        method: "DELETE",
        headers: headers(),
    }).then(res => res.json())
   
    fetch(`${BACKEND_DOMAIN}/cards`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(cardz)
    }).then(res => res.json())
    
    return {
            type: "DROP_CARD",
            payload: {card, droppedBoard, formerBoardId}
        }
}

export const onIconDragStart = (icon_obj) => {
    icon = icon_obj;
}



export const onIconDrop = (data) => {
    if (!data.icon_img.includes(icon)) {
        data.icon_img.push(icon);
        let user_data = {user: data}
        console.log('USER INFO AFTER PUSH HERE', user_data)
        fetch(`${BACKEND_DOMAIN}/users/${data.id}`, {
            method: "PUT",
            headers: headers(),
            body: JSON.stringify(user_data)
        }).then(resp => resp.json());

        return {
            type: "DROP_ICON",
            payload: icon
        }
    }
}
