const PROJECT_INITIAL_STATE = 0

export const projectIDReducer = (state = PROJECT_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PROJECTID':
            return action.id;
     
        default:
            return state;
    }
    
}