let token = () => localStorage.getItem("token")

let card = null
let icon = null
//DRAG
//set state thay bang action
//action vo reducer, vo store
//DROP
//drop vao trong thang board khac


export const onCardDragStart = (card_obj) => {
    card = card_obj;
    console.log("onCardDragStart: ", card)
    return card
}

export const onCardDrop = (board) => {
    console.log("onCardDrop: ", card, board)
    
     return{
        type: "DROP_CARD",
        payload: card
    }
}

export const onIconDragStart = (icon_obj) => {
    icon = icon_obj;
    return icon
}

export const onIconDrop = (location) => {
    console.log("onIconDrop: ", icon, location)
}
