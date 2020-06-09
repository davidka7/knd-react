const PROJECT_INITIAL_STATE = []

export const projectReducer = (state = PROJECT_INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_MY_PROJECTS':
            console.log(action)
            return action.payload.map(item => item);
        case 'CREATE_PROJECT':
            return [...state, action.payload.project];
        case 'DELETE_PROJECT':   
            return state.filter((p) => p.id !== action.id)
        default:
            return state;
    }
    
}