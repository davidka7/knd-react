
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

        return fetch(`${BACKEND_DOMAIN}/users/${userInfo.id}`, {
            method: "PUT",
            headers: headers(),
            body: JSON.stringify(update_icon)
        }).then(res => res.json())
        .then(res => {
            console.log("DROP ICON ACTION HERE", res)
            return {
                type: "DROP_ICON",
                payload: res
            }
        });

        
    }
}

export const removeIcon = (userInfo, selectedIcon) => {

    if (!userInfo.icon_img.includes(selectedIcon)) {

        const index = userInfo.icon_img.indexOf(selectedIcon);
        if (index > -1) {
            userInfo.icon_img.splice(index, 1);
        }
        
        const delete_icon = {
            user: { icon_img: userInfo.icon_img }
        }

        return fetch(`${BACKEND_DOMAIN}/users/${userInfo.id}`, {
            method: "PUT",
            headers: headers(),
            body: JSON.stringify(delete_icon)
        }).then(res => res.json())
        .then(res => {
            console.log("REMOVE ICON ACTION HERE", res)
            return {
                type: "REMOVE_ICON",
                payload: res
            }
        });

    }
}
