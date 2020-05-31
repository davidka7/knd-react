const PROJECT_INITIAL_STATE = []

export const projectReducer = (state = PROJECT_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_MY_PROJECTS':
            return action.payload.map(item => item);
        case 'CREATE_PROJECT':
            return [...state, action.payload.project];

        default:
            return state;
    }
    
}