const PROJECT_INITIAL_STATE = []

export const cardReducer = (state = PROJECT_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ALL_CARDS':
            return action.payload.map(item => item);
        default:
            return state;
    }   
}