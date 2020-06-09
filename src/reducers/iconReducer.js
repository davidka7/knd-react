const PROJECT_INITIAL_STATE = []

export const iconReducer = (state = PROJECT_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_MY_ICONS':
            return action.payload[0].images
        
        default:
            return state;
    }
    
}