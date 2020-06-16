const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
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

    const update_icon = {
        user: { icon_img: [...userInfo.icon_img, selectedIcon] }
    }
    return fetch(`${BACKEND_DOMAIN}/users/${userInfo.id}`, {
        method: "PUT",
        headers: headers(),
        body: JSON.stringify(update_icon)
    }).then(res => res.json())
    .then(res => {
        return {
            type: "DROP_ICON",
            payload: res
        }
    });   

}

export const removeIcon = (userInfo, selectedIcon) => {
    
    const delete_icon = {
        user: { icon_img: userInfo.icon_img.filter(icon => icon !== selectedIcon.icon_img) }
    }
    console.log("REMOVE ICON ACTION", delete_icon)
    return fetch(`${BACKEND_DOMAIN}/users/${userInfo.id}`, {
        method: "PUT",
        headers: headers(),
        body: JSON.stringify(delete_icon)
    }).then(res => res.json())
    .then(res => {
        return {
            type: "REMOVE_ICON",
            payload: res
        }
    });

    
}
