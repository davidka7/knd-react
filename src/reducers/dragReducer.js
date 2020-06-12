const DRAG_INITIAL_STATE = {}

export const dragReducer = (state = DRAG_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ICON_DRAG':
            return {icon_img: action.icon};
        case 'CARD_DRAG':
            return action.card;
        default:
            return state;
    }
    
}