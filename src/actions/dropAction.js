// let card = null
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
    console.log("LOOOK HERE", card_obj, board_id)
    // card = card_obj;
    formerBoardId = board_id
}

// export const onCardDrop = (droppedBoard) => {
//     console.log("DROP HERE", droppedBoard, card)
    
//     let cardz={card_title: card.card_title, content: card.content, board_id: droppedBoard.id}
//     fetch(`${BACKEND_DOMAIN}/cards/${card.id}`, {
//         method: "DELETE",
//         headers: headers(),
//     }).then(res => res.json())
   
//     fetch(`${BACKEND_DOMAIN}/cards`, {
//         method: "POST",
//         headers: headers(),
//         body: JSON.stringify(cardz)
//     }).then(res => res.json())
    
//     return {
//             type: "DROP_CARD",
//             payload: {card, droppedBoard, formerBoardId}
//         }
// }

export const onCardDrop = (droppedBoard, card) => {
    console.log("DROP HERE", droppedBoard, card)
    
    let selectedCard = {
        card: { board_id: droppedBoard.id }
    }

    fetch(`${BACKEND_DOMAIN}/cards/${card.id}`, {
        method: "PUT",
        headers: headers(),
        body: JSON.stringify(selectedCard)
    }).then(res => res.json())
    

   
   
    return {
            type: "DROP_CARD",
            payload: {card, droppedBoard, formerBoardId}
        }
}

export const onIconDragStart = (selectedIcon) => {

    return {
        type: "SELECT_ICON",
        payload: selectedIcon
    }
}



export const onIconDrop = (userInfo, selectedIcon) => {
    console.log("SELECTED ICON", selectedIcon)
    if (!userInfo.icon_img.includes(selectedIcon)) {
        userInfo.icon_img.push(selectedIcon)
        const update_icon = {
            user: { icon_img: userInfo.icon_img }
        }

        fetch(`${BACKEND_DOMAIN}/users/${userInfo.id}`, {
            method: "PUT",
            headers: headers(),
            body: JSON.stringify(update_icon)
        }).then(resp => resp.json());

        return {
            type: "DROP_ICON",
            payload: selectedIcon
        }
    }
}
