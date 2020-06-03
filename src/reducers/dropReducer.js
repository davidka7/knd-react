const CARD_INITIAL_STATE = null;

export const dropReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "DRAG_CARD":

            return action.payload;

        case "DRAG_ICON":
            return action.payload;
       
        default:
            return state;
    };
}