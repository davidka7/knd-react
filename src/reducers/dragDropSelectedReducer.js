const DND_INITIAL_STATE = { icon: null, card: null }

export const dragDropSelectedReducer = (state = DND_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SELECT_ICON':
            return {icon: action.payload, card: null}
        default:
            return state;
    }
    
}