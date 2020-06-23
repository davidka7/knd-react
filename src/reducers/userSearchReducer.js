const USER_INITIAL_STATE = null

export const userSearchReducer = (state = USER_INITIAL_STATE, action) => {

    switch (action.type) {
        case 'SEARCH_USER':
            return action.payload
        case 'SEARCH_USER_ERROR':
            return null
        case 'CLEAR_USER_FROM_SEARCH':
            return null
        default:
            return state;
    }
    
}