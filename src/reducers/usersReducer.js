const USER_INITIAL_STATE = {}

export const usersReducer = (state = USER_INITIAL_STATE, action) => {

    switch (action.type) {
        case 'GET_USER':
            return action.payload
        default:
            return state;
    }
    
}