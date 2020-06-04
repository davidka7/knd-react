const PROJECT_INITIAL_STATE = []

export const boardReducer = (state = PROJECT_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_BOARDS_FROM_PROJECT':
            return action.payload.map(item => item);
        case 'CREATE_BOARD':
            console.log(action.payload)
            return [...state, action.payload.board];
            
        case 'DELETE_BOARD':
            return state.filter((p) => p.id !== action.id)
        case 'CREATE_BOARD':
            return [...state, action.payload.board];
        case 'DROP_CARD':
            if (action.payload.droppedBoard.id === action.payload.formerBoardId) {
                return state
            }
            state = state.map(b => b.id === action.payload.droppedBoard.id
                ? {...b, cards: [...b.cards, action.payload.card] } : b);
            state = state.map(b => b.id === action.payload.formerBoardId
                    ? { ...b, cards: b.cards.filter(c => c.id !== action.payload.card.id) } : b);
                    console.log("HERE", action.payload.formerBoardId)
            return state
        default:
            return state;
    }   
}