
export const onIconDragStart = (icon, dispatch) => {
    console.log(icon)
    dispatch ({
        type: "ICON_DRAG",
        icon: icon
    });   
}

export const onCardDragStart = (card, dispatch) => {
    dispatch ({
        type: "CARD_DRAG",
        card: card
    });
}