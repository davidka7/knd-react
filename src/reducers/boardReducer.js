const PROJECT_INITIAL_STATE = []

export const boardReducer = (state = PROJECT_INITIAL_STATE, action) => {
    console.log('DROP HEREEEEE BEFORE')
    switch (action.type) {
        case 'GET_BOARDS_FROM_PROJECT':
            return action.payload.map(item => item);

        case "DROP_CARD":
            console.log('DROP HEREEEEE AFTER')
            return state.map( item => item.cards = [...item.cards, action.payload] );

        default:
            return state;
    }   
}