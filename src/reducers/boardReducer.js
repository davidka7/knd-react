const PROJECT_INITIAL_STATE = []

export const boardReducer = (state = PROJECT_INITIAL_STATE, action) => {
    console.log('DROP HEREEEEE BEFORE')
    switch (action.type) {
        case 'GET_BOARDS_FROM_PROJECT':
            return action.payload.map(item => item);
            case 'CREATE_BOARD':
                console.log(action.payload)
                return [...state, action.payload.board];
               
        default:
            return state;
    }   
}