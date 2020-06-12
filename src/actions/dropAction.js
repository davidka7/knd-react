
const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token()
    };
};



export const onCardDrop = (droppedBoard, selectedCard) => {

    let updateCard = {
        card: { board_id: droppedBoard.id }
    }

    return fetch(`${BACKEND_DOMAIN}/cards/${selectedCard.id}`, {
        method: "PUT",
        headers: headers(),
        body: JSON.stringify(updateCard)
    }).then(res => res.json())
    .then(res => {
        return {
            type: "DROP_CARD",
            payload: { droppedCard: res.card, formerBoardId: selectedCard.board_id}
        }
    });
   
    
}



export const onIconDrop = (userInfo, selectedIcon) => {

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

