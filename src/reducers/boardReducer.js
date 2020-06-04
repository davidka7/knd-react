const PROJECT_INITIAL_STATE = []

export const boardReducer = (state = PROJECT_INITIAL_STATE, action) => {
    console.log('DROP HEREEEEE BEFORE')
    switch (action.type) {
        case 'GET_BOARDS_FROM_PROJECT':
            return action.payload.map(item => item);
            case 'CREATE_BOARD':
                console.log(action.payload)
                return [...state, action.payload.board];
                case "DROP_CARD":
            console.log("hi")
            case 'DELETE_BOARD':   
            console.log(action, state)
                return state.filter((p) => p.id !== action.id)
        default:
            return state;
    }   
}