const PROJECT_INITIAL_STATE = []

export const boardReducer = (state = PROJECT_INITIAL_STATE, action) => {
   
    switch (action.type) {
        case 'GET_BOARDS_FROM_PROJECT':
            return action.payload.map(item => item);
        case 'CREATE_BOARD':
            return [...state, action.payload];
        case 'DELETE_CARD':
            state = state.map(b => b.id === action.card.board_id
                ? { ...b, cards: b.cards.filter(c => c.id !== action.card.id) } : b);
            return state
        case 'DELETE_BOARD':
            return state.filter((p) => p.id !== action.id)
        case 'CREATE_CARD':
              return state.map(b => b.id === action.payload.card.board_id
                ? {...b, cards: [...b.cards, action.payload.card] } : b);
        case 'DROP_CARD':
            if (action.payload.droppedCard.board_id === action.payload.formerBoardId) {
                return state
            }
            state = state.map(b => b.id === action.payload.droppedCard.board_id
                ? { ...b, cards: [...b.cards, action.payload.droppedCard] } : b);
            state = state.map(b => b.id === action.payload.formerBoardId
                ? { ...b, cards: b.cards.filter(c => c.id !== action.payload.droppedCard.id) } : b);
            return state
        case 'DROP_ICON_ON_CARD':
            state = state.map(b => b.id === action.payload.droppedCard.board_id
                ? {...b, cards: b.cards.map( c => c.id === action.payload.droppedCard.id 
                    ? {...c, image: action.payload.droppedCard.image} : c ) } : b);

        default:
            return state;
    }   
}