let card = null
let icon = null
let formerBoardId = null
//DRAG
//set state thay bang action
//action vo reducer, vo store
//DROP
//drop vao trong thang board khac


export const onCardDragStart = (card_obj, board_id) => {
    card = card_obj;
    formerBoardId = board_id
    console.log("onCardDragStart: ", card, board_id)
}

export const onCardDrop = (droppedBoard) => {
    
     return {
            type: "DROP_CARD",
            payload: {card, droppedBoard, formerBoardId}
        }
}

export const onIconDragStart = (icon_obj) => {
    icon = icon_obj;
    return icon
}

export const onIconDrop = (location) => {
    console.log("onIconDrop: ", icon, location)
}
