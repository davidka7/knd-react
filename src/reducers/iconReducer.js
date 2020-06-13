const ICON_INITIAL_STATE = []

export const iconReducer = (state = ICON_INITIAL_STATE, action) => {
    console.log("WHY", action.payload)
    switch (action.type) {
    
        case 'GET_MY_ICONS':
            console.log("WHAT", action.payload)
            return action.payload[0].images
        default:
            return state;
    }
    
}