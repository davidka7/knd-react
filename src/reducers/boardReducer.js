const PROJECT_INITIAL_STATE = []

export const boardReducer = (state = PROJECT_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ALL_BOARDS':
            return action.payload.map(item => item);
        default:
            return state;
    }   
}