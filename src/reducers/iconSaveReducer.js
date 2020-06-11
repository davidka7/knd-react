const ICON_SAVE_INITIAL_STATE = ''

export const iconSaveReducer = (state = ICON_SAVE_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ICON_ID':
            return action.icon;
        case 'CARD_ID':
            return action.card;
        default:
            return state;
    }
    
}