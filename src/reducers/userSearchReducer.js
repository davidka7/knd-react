const USER_INITIAL_STATE = null

export const userSearchReducer = (state = USER_INITIAL_STATE, action) => {

    switch (action.type) {
        case 'GET_USER':
            return action.payload
        case 'CLEAR_USE_FROM_SEARCH':
            return null
        default:
            return state;
    }
    
}