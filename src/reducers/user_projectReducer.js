const PROJECT_INITIAL_STATE = []

export const user_projectReducer = (state = PROJECT_INITIAL_STATE, action) => {

    switch (action.type) {
        case "GET_USER_PROJECTS":
            console.log("LOOK HERE",action.payload)
            return action.payload.map(item => item);
        default:
            return state;
    }
    
}