const PROJECT_INITIAL_STATE = {}

export const projectIDReducer = (state = PROJECT_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_PROJECT_FROM_ID':
            return action.payload;
        default:
            return state;
    }
    
}